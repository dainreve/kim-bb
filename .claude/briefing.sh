#!/bin/bash

cd "$(dirname "$0")/.."
TODAY=$(date +%Y-%m-%d)

echo "🤖 김비서 데이터 브리핑"
echo "===================="
echo ""

# 1. 데이터 파일 확인
echo "📂 데이터 파일 스캔:"
for file in *.csv *.txt; do
    if [ -f "$file" ]; then
        size=$(wc -c < "$file")
        echo "  ✓ $file ($size bytes)"
    fi
done

echo ""

# 2. 대시보드 상태
echo "📊 대시보드 상태:"
if [ -f "dashboard.html" ]; then
    mtime=$(stat -f "%Sm" -t "%Y-%m-%d %H:%M:%S" dashboard.html 2>/dev/null || stat -c %y dashboard.html 2>/dev/null | cut -d' ' -f1,2)
    echo "  ✓ dashboard.html (수정: $mtime)"
fi

echo ""

# 3. 업무 목록 (마감이 이번 주인 것들)
echo "📋 주요 업무:"
if [ -f "업무목록.csv" ]; then
    head -5 업무목록.csv | tail -4 | while IFS=',' read -r task deadline priority status; do
        echo "  • $task (마감: $deadline, 우선순위: $priority)"
    done
fi

echo ""

# 4. 주간 일정
echo "📅 이번 주 일정:"
if [ -f "주간일정.txt" ]; then
    head -3 주간일정.txt
fi

echo ""
echo "✅ 데이터 브리핑 완료!"
