#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = __dirname + '/..';

console.log('🤖 김비서 시스템 시작\n');

// 1. 데이터 파일 읽기
console.log('📂 데이터 파일 스캔 중...');
const files = fs.readdirSync(dataDir).filter(f => 
  f.endsWith('.csv') || f.endsWith('.txt')
);

const data = {};
files.forEach(file => {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  data[file] = content;
  console.log(`  ✓ ${file} (${content.length} bytes)`);
});

// 2. 대시보드 상태 확인
console.log('\n📊 대시보드 상태 확인 중...');
const dashboardPath = path.join(dataDir, 'dashboard.html');
const stat = fs.statSync(dashboardPath);
console.log(`  ✓ dashboard.html (마지막 수정: ${stat.mtime.toLocaleString()})`);

// 3. 오늘의 할 일 브리핑
console.log('\n📋 오늘의 할 일 브리핑:');
const today = new Date().toISOString().split('T')[0];

try {
  const taskData = fs.readFileSync(path.join(dataDir, '업무목록.csv'), 'utf8');
  const lines = taskData.trim().split('\n').slice(1);
  const todayTasks = lines.filter(line => line.includes(today));
  
  if (todayTasks.length === 0) {
    console.log('  ℹ️  오늘 등록된 업무가 없습니다.');
  } else {
    todayTasks.forEach(task => {
      console.log(`  • ${task}`);
    });
  }
} catch (e) {
  console.log('  ℹ️  업무목록 데이터를 읽을 수 없습니다.');
}

// 4. 주간 일정
console.log('\n📅 이번 주 일정:');
try {
  const scheduleData = fs.readFileSync(path.join(dataDir, '주간일정.txt'), 'utf8');
  console.log(scheduleData);
} catch (e) {
  console.log('  ℹ️  주간일정 데이터를 읽을 수 없습니다.');
}

console.log('\n✅ 김비서 브리핑 완료!');
