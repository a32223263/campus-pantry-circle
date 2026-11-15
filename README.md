# Campus Pantry Circle

## 🛠️ Actions

### Build Actions

1. 페이지와 공통 레이아웃을 구현한다.

2. 핵심 기능과 사용자 흐름을 연결한다.

3. 필요한 샘플 데이터를 적용한다.

4. 모바일과 데스크톱 화면을 점검한다.

5. 핵심 흐름을 테스트한다.

### Acceptance Criteria

- [ ] 사용자가 핵심 행동을 처음부터 끝까지 완료할 수 있다.

- [ ] 모든 버튼과 이동 경로가 정상 작동한다.

- [ ] 모바일과 데스크톱에서 주요 콘텐츠를 확인할 수 있다.

- [ ] MVP 범위를 벗어난 기능이 포함되지 않는다.

### Deliverables

- 작동 가능한 Lovable MVP

- 핵심 화면과 페이지 이동

- 테스트 가능한 샘플 데이터


위 내용에서 좀 더 다듬은 상세 계획
# 🚀 자취생 식재료·생필품 쉐어 플랫폼 '자취메이트' MVP PRD v1.0

## 🎯 Project Overview

- **서비스명**: 자취메이트 (초근접 비대면 쉐어 라이프)

- **슬로건**: "부담스러운 대용량과 배달비는 반으로, 초근접 비대면 쉐어 라이프"

- **핵심 목표**: 학교 정·후문 도보 10분 내 원룸 자취생을 대상으로, 대면·계좌 노출 부담 없이 반경 500m 이내에서 식료품·생필품을 소분 쉐어하고 비대면 수령하는 모바일 웹앱 MVP 구현

## 📱 Core Pages & UI/UX Structure

1. **로그인 / 학교 인증 화면**

   - 단국대학교 이메일 인증 시뮬레이션 및 반경 500m GPS 위치 인증 배지 부여

2. **홈 / 매칭 피드 (Home Feed)**

   - 반경 500m 내 진행 중인 쉐어 리스트 카드 목록 (품목명, 남은 수량, 예상 가격, 거리, 주최자 매너온도)

   - 카테고리 필터 (식재료, 생필품, 배달비 쉐어) 및 '쉐어 등록' 플로팅 버튼

3. **쉐어 등록 (Create Share)**

   - 품목명, 총 수량/소분 수량, 가격, 픽업 위치(예: 정문 GS편의점 택배함, 기숙사 무인 보관함) 입력 폼

4. **쉐어 상세 및 참여 (Detail & Join)**

   - 상세 정보, 주최자 신뢰도(매너 점수), 보증금 예치 및 '참여하기(자동 정산)' 버튼

5. **마이페이지 / 안심 정산 & 픽업 안내**

   - 참여 중인 쉐어의 정산 상태 표시 (예치 완료 / 픽업 대기 / 거래 완료)

   - 비대면 픽업용 QR 코드 생성 화면 및 '수령 완료' 확인 버튼

   - 거래 완료 후 상대방 매너 평가(별점/태그 리뷰) 입력창

## ✨ Core Features (MVP Scope)

- **P0: 500m 쉐어 매칭**: 학교 인증 기반 반경 500m 이내 실시간 쉐어 탐색 및 원터치 참여

- **P0: 보증금 예치 & 자동 정산**: 노쇼 방지 및 계좌번호 노출을 없앤 앱 내 안전 예치·정산 시뮬레이션

- **P0: 비대면 QR 안심 수령**: 지정된 픽업존(편의점/기숙사 보관함) 위치 안내 및 QR 코드 수령증 표시

- **P1: 매너 평가 시스템**: 거래 완료 후 상대방 매너 점수 반영 및 프로필 온도 갱신

## 🎨 Design & Tech Style

- **분위기**: 대학생 타겟의 친근하고 신뢰감 있는 클린 미니멀 스타일 (Tailwind CSS 기반)

- **컬러 시스템**: 메인 민트/그린 (`#10B981`), 서브 그레이 (`#F3F4F6`), 포인트 다크 (`#111827`)

- **레이아웃**: 모바일 중심의 싱글 컬럼 카드 피드 구조 (반응형 웹앱 뷰포트 지원, 하단 네비게이션바 포함)

- **샘플 데이터**: "우유 1L 반반 쉐어 (도보 3분, 1,800원)", "계란 10구 소분 (정문 GS앞, 2,500원)" 등 실제 테스트 가능한 샘플 데이터 기본 탑재

## 🛠️ Build Actions for Lovable

1. 모바일 최적화된 하단 네비게이션바(홈, 쉐어 등록, 알림, 마이페이지)와 클린 미니멀 레이아웃을 구현한다.

2. 홈 피드에서 쉐어 카드를 클릭해 상세 페이지로 이동하고, '참여하기' 시 보증금 예치 및 비대면 QR 픽업 화면으로 자연스럽게 이어지는 사용자 흐름(User Flow)을 연결한다.

3. 실제 작동하는 인터랙티브 상태(State)를 적용하여 사용자가 글 작성, 참여 신청, 픽업 QR 확인, 거래 완료 및 매너 평가까지 전체 흐름을 테스트할 수 있도록 한다.

4. 모바일 및 데스크톱 환경 모두에서 깨지지 않는 반응형 뷰를 구성한다.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://campus-pantry-circle.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8c7403ae-6a67-4efc-bec7-987f84b79157).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
