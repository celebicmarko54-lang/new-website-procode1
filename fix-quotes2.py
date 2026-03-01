import re

with open('fix-bg-phase9.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all problematic Unicode quote chars and replace with safe alternatives
# U+201E „ (double low-9 quotation mark) -> «
# U+201C " (left double quotation mark) -> »  
# U+201D " (right double quotation mark) -> »
content = content.replace('\u201e', '\u00ab')
content = content.replace('\u201c', '\u00bb')
content = content.replace('\u201d', '\u00bb')

# Also check for regular " that might be mis-placed inside strings
# Show any remaining issues
for i, line in enumerate(content.split('\n'), 1):
    stripped = line.strip()
    if stripped.startswith('"') and '": "' in stripped:
        # Count quotes - should be even
        q = stripped.count('"')
        if q % 2 != 0:
            print(f"Odd quotes on line {i}: {stripped[:80]}")

with open('fix-bg-phase9.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done fixing quotes')
