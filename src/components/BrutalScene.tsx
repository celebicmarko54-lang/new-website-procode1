'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BrutalScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    geometries: THREE.Mesh[];
    shards: THREE.Mesh[];
    time: number;
    mouseX: number;
    mouseY: number;
    explosionPhase: number;
    glitchIntensity: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0008);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      2000
    );
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // BRUTAL PARTICLE SYSTEM - 50,000 particles
    const particleCount = 50000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    // Create a brutal vortex shape
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 400 + 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      // Twisted helix formation
      const twist = theta * 3;
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta + twist);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta + twist) + (Math.random() - 0.5) * 200;
      positions[i3 + 2] = radius * Math.cos(phi);
      
      originalPositions[i3] = positions[i3];
      originalPositions[i3 + 1] = positions[i3 + 1];
      originalPositions[i3 + 2] = positions[i3 + 2];

      // Brutal color palette - blood red, electric blue, toxic green, void purple
      const colorChoice = Math.random();
      if (colorChoice < 0.25) {
        colors[i3] = 1.0; colors[i3 + 1] = 0.1; colors[i3 + 2] = 0.2; // Blood red
      } else if (colorChoice < 0.5) {
        colors[i3] = 0.2; colors[i3 + 1] = 0.5; colors[i3 + 2] = 1.0; // Electric blue
      } else if (colorChoice < 0.75) {
        colors[i3] = 0.3; colors[i3 + 1] = 1.0; colors[i3 + 2] = 0.4; // Toxic green
      } else {
        colors[i3] = 0.8; colors[i3 + 1] = 0.2; colors[i3 + 2] = 1.0; // Void purple
      }

      sizes[i] = Math.random() * 4 + 1;
      
      velocities[i3] = (Math.random() - 0.5) * 10;
      velocities[i3 + 1] = (Math.random() - 0.5) * 10;
      velocities[i3 + 2] = (Math.random() - 0.5) * 10;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shader for brutal particle rendering
    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        glitchIntensity: { value: 0 },
        explosionForce: { value: 0 },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform float glitchIntensity;
        uniform float explosionForce;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Brutal distortion
          float distortion = sin(pos.x * 0.01 + time * 2.0) * 20.0 * glitchIntensity;
          pos.y += distortion;
          pos.x += cos(pos.y * 0.01 + time * 3.0) * 15.0 * glitchIntensity;
          
          // Explosion effect
          vec3 explosionDir = normalize(pos);
          pos += explosionDir * explosionForce * 50.0;
          
          // Pulsating size
          float pulseSize = size * (1.0 + sin(time * 5.0 + length(position) * 0.01) * 0.5);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = pulseSize * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        uniform float time;
        uniform float glitchIntensity;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          // Glowing core
          float glow = 1.0 - dist * 2.0;
          glow = pow(glow, 2.0);
          
          // Color shift glitch
          vec3 color = vColor;
          color.r += sin(time * 10.0) * 0.2 * glitchIntensity;
          color.b += cos(time * 8.0) * 0.2 * glitchIntensity;
          
          gl_FragColor = vec4(color * glow, glow);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // BRUTAL GEOMETRIC SHARDS - Floating fractured pieces
    const geometries: THREE.Mesh[] = [];
    const shards: THREE.Mesh[] = [];
    
    // Create brutal icosahedrons
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 60 + 20;
      const geometry = new THREE.IcosahedronGeometry(size, 0);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random(), 1.0, 0.5),
        wireframe: true,
        transparent: true,
        opacity: 0.8,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 400
      );
      mesh.userData = {
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.05,
          y: (Math.random() - 0.5) * 0.05,
          z: (Math.random() - 0.5) * 0.05,
        },
        originalPos: mesh.position.clone(),
        phase: Math.random() * Math.PI * 2,
      };
      scene.add(mesh);
      geometries.push(mesh);
    }

    // Create brutal shards (tetrahedrons)
    for (let i = 0; i < 40; i++) {
      const size = Math.random() * 30 + 10;
      const geometry = new THREE.TetrahedronGeometry(size, 0);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: Math.random() > 0.5,
        transparent: true,
        opacity: 0.6,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 500
      );
      mesh.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ),
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.1,
          y: (Math.random() - 0.5) * 0.1,
          z: (Math.random() - 0.5) * 0.1,
        },
      };
      scene.add(mesh);
      shards.push(mesh);
    }

    // BRUTAL LIGHTNING LINES
    const lightningGroup = new THREE.Group();
    scene.add(lightningGroup);

    const createLightning = () => {
      lightningGroup.clear();
      for (let i = 0; i < 8; i++) {
        const points: THREE.Vector3[] = [];
        let start = new THREE.Vector3(
          (Math.random() - 0.5) * 600,
          300,
          (Math.random() - 0.5) * 300
        );
        points.push(start.clone());
        
        for (let j = 0; j < 10; j++) {
          start = start.clone().add(new THREE.Vector3(
            (Math.random() - 0.5) * 80,
            -60 - Math.random() * 40,
            (Math.random() - 0.5) * 80
          ));
          points.push(start.clone());
        }
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color().setHSL(Math.random() * 0.2 + 0.5, 1, 0.7),
          transparent: true,
          opacity: Math.random() * 0.5 + 0.5,
        });
        const line = new THREE.Line(geometry, material);
        lightningGroup.add(line);
      }
    };

    // Store refs
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      geometries,
      shards,
      time: 0,
      mouseX: 0,
      mouseY: 0,
      explosionPhase: 0,
      glitchIntensity: 0,
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;
      sceneRef.current.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      sceneRef.current.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // BRUTAL ANIMATION LOOP
    let animationId: number;
    let lastTime = 0;
    
    const animate = (currentTime: number) => {
      if (!sceneRef.current) return;
      
      const deltaTime = (currentTime - lastTime) * 0.001;
      lastTime = currentTime;
      
      sceneRef.current.time += deltaTime;
      const time = sceneRef.current.time;

      // Glitch intensity pulses
      sceneRef.current.glitchIntensity = Math.abs(Math.sin(time * 0.5)) * 0.5 + 
        (Math.random() > 0.95 ? Math.random() * 2 : 0);

      // Explosion waves
      sceneRef.current.explosionPhase = Math.sin(time * 0.3) * 0.5 + 0.5;

      // Update particle shader uniforms
      const particleMat = particles.material as THREE.ShaderMaterial;
      particleMat.uniforms.time.value = time;
      particleMat.uniforms.glitchIntensity.value = sceneRef.current.glitchIntensity;
      particleMat.uniforms.explosionForce.value = sceneRef.current.explosionPhase;

      // Brutal particle vortex rotation
      particles.rotation.y += 0.002;
      particles.rotation.x = Math.sin(time * 0.2) * 0.2;

      // Update particle positions for vortex effect
      const posAttr = particles.geometry.getAttribute('position') as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Spiral vortex motion
        const angle = time * 0.5 + i * 0.0001;
        const radius = Math.sqrt(
          originalPositions[i3] ** 2 + 
          originalPositions[i3 + 2] ** 2
        );
        
        posArray[i3] = originalPositions[i3] + Math.sin(angle) * velocities[i3];
        posArray[i3 + 1] = originalPositions[i3 + 1] + Math.cos(time + i * 0.01) * 5;
        posArray[i3 + 2] = originalPositions[i3 + 2] + Math.cos(angle) * velocities[i3 + 2];
        
        // Chaotic burst
        if (Math.random() > 0.999) {
          posArray[i3] += (Math.random() - 0.5) * 50;
          posArray[i3 + 1] += (Math.random() - 0.5) * 50;
          posArray[i3 + 2] += (Math.random() - 0.5) * 50;
        }
      }
      posAttr.needsUpdate = true;

      // Animate geometries with brutal distortion
      geometries.forEach((mesh, index) => {
        const userData = mesh.userData;
        mesh.rotation.x += userData.rotSpeed.x;
        mesh.rotation.y += userData.rotSpeed.y;
        mesh.rotation.z += userData.rotSpeed.z;
        
        // Pulsating scale
        const scale = 1 + Math.sin(time * 2 + userData.phase) * 0.3;
        mesh.scale.set(scale, scale, scale);
        
        // Orbit around center
        const orbitRadius = 200 + index * 30;
        mesh.position.x = userData.originalPos.x + Math.cos(time * 0.5 + index) * orbitRadius * 0.3;
        mesh.position.y = userData.originalPos.y + Math.sin(time * 0.7 + index) * 100;
        mesh.position.z = userData.originalPos.z + Math.sin(time * 0.5 + index) * orbitRadius * 0.3;
        
        // Color cycling
        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.color.setHSL((time * 0.1 + index * 0.1) % 1, 1, 0.5);
      });

      // Animate shards with chaotic motion
      shards.forEach((mesh) => {
        const userData = mesh.userData;
        mesh.position.add(userData.velocity);
        mesh.rotation.x += userData.rotSpeed.x;
        mesh.rotation.y += userData.rotSpeed.y;
        mesh.rotation.z += userData.rotSpeed.z;
        
        // Boundary wrap
        if (Math.abs(mesh.position.x) > 500) userData.velocity.x *= -1;
        if (Math.abs(mesh.position.y) > 500) userData.velocity.y *= -1;
        if (Math.abs(mesh.position.z) > 400) userData.velocity.z *= -1;
        
        // Random velocity changes
        if (Math.random() > 0.99) {
          userData.velocity.x += (Math.random() - 0.5) * 1;
          userData.velocity.y += (Math.random() - 0.5) * 1;
          userData.velocity.z += (Math.random() - 0.5) * 1;
        }
      });

      // Update lightning periodically
      if (Math.random() > 0.97) {
        createLightning();
      }

      // Camera shake and movement
      camera.position.x = sceneRef.current.mouseX * 100;
      camera.position.y = sceneRef.current.mouseY * 100;
      camera.lookAt(0, 0, 0);
      
      // Brutal camera shake
      if (sceneRef.current.glitchIntensity > 1) {
        camera.position.x += (Math.random() - 0.5) * 20;
        camera.position.y += (Math.random() - 0.5) * 20;
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate(0);
    createLightning();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !sceneRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)',
        zIndex: 0 
      }}
    />
  );
}
