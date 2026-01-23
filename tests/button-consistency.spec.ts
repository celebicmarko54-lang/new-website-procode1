import { test, expect } from '@playwright/test';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Enterprise', path: '/enterprise' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Community', path: '/community' },
  { name: 'Careers', path: '/careers' },
  { name: 'Press', path: '/press' },
  { name: 'Security', path: '/security' },
  { name: 'Students', path: '/students' },
  { name: 'Founders', path: '/solutions/founders' },
  { name: 'Designers', path: '/solutions/designers' },
  { name: 'Marketers', path: '/solutions/marketers' },
  { name: 'Prototyping', path: '/solutions/prototyping' },
  { name: 'Learn', path: '/learn' },
  { name: 'Templates', path: '/templates' },
  { name: 'Guides', path: '/guides' },
  { name: 'Videos', path: '/videos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Support', path: '/support' },
  { name: 'Signup', path: '/signup' },
  { name: 'Login', path: '/login' },
];

test.describe('Button Color Consistency', () => {
  for (const page of pages) {
    test(`Check primary buttons on ${page.name} page`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState('networkidle');

      // Take a screenshot for visual inspection
      await browserPage.screenshot({ 
        path: `test-results/screenshots/${page.name.toLowerCase().replace(/\s+/g, '-')}.png`,
        fullPage: true 
      });

      // Find all primary action buttons (with gradient backgrounds)
      const primaryButtons = await browserPage.locator('a, button').filter({
        has: browserPage.locator(':scope')
      }).all();

      for (const button of primaryButtons) {
        const style = await button.getAttribute('style');
        const className = await button.getAttribute('class');
        
        // Check if button has a gradient
        if (style?.includes('gradient') || className?.includes('gradient')) {
          // Log for debugging
          const text = await button.textContent();
          console.log(`Found gradient button on ${page.name}: "${text?.trim()}"`);
          
          // Check for the correct gradient (pink to purple)
          if (style?.includes('gradient')) {
            // Should use the consistent gradient
            const hasCorrectGradient = style.includes('#E91E8C') && style.includes('#9B59B6');
            const hasOldGradient = style.includes('#ec4899') || style.includes('#be185d');
            
            if (hasOldGradient && !hasCorrectGradient) {
              console.warn(`⚠️ Button on ${page.name} page uses old gradient: "${text?.trim()}"`);
            }
          }
          
          if (className?.includes('from-[#ec4899]') || className?.includes('to-[#be185d]')) {
            const text = await button.textContent();
            console.warn(`⚠️ Button on ${page.name} page uses Tailwind old gradient class: "${text?.trim()}"`);
          }
        }
      }
    });
  }
});

test('Header button consistency', async ({ page }) => {
  await page.goto('/');
  
  // Check Get Started button in header
  const getStartedBtn = page.locator('header a:has-text("Get started")');
  const style = await getStartedBtn.getAttribute('style');
  
  expect(style).toContain('#E91E8C');
  expect(style).toContain('#9B59B6');
});
