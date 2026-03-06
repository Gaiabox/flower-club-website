#!/bin/bash
# Overflow check — run after any site change.
# Uses curl to hit each page and checks the response loads (200).
# Actual overflow measurement is done via the browser evaluate tool.

PAGES=("/" "/work" "/services" "/contact" "/about")
BASE="http://localhost:3002"
FAILED=0

echo "Checking all pages for HTTP 200..."
for page in "${PAGES[@]}"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$page")
  if [ "$STATUS" = "200" ]; then
    echo "✅ $page → $STATUS"
  else
    echo "❌ $page → $STATUS"
    FAILED=1
  fi
done

if [ $FAILED -eq 0 ]; then
  echo ""
  echo "✅ All pages returning 200. Run overflow eval in browser to confirm no horizontal scroll."
else
  echo ""
  echo "🚨 Some pages failed — fix before proceeding."
  exit 1
fi
