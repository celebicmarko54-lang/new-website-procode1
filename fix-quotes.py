with open('fix-bg-phase9.js', 'r') as f:
    content = f.read()
content = content.replace('\u201e', '\u00ab')
content = content.replace('\u201c', '\u00bb')
with open('fix-bg-phase9.js', 'w') as f:
    f.write(content)
print('Done')
