import Image from "next/image";

export default function AppIntro() {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen bg-gray-100">
      <div className="flex items-center mb-4">
        <Image
          src="/1024x1024.png"
          alt="App Icon"
          width={100}
          height={100}
          className="mr-4 rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">핵교 - 전국 초중교 시간표 및 급식 정보를 한눈에!</h1>
          <h2 className="text-xl text-gray-600">핵교 댕겨오겠습니다</h2>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-20">
        <a
          href="https://apps.apple.com/us/app/%ED%95%B5%EA%B5%90-%EC%A0%84%EA%B5%AD-%EC%B4%88%EC%A4%91%EA%B3%A0-%EC%8B%9C%EA%B0%84%ED%91%9C-%EB%B0%8F-%EA%B8%89%EC%8B%9D-%EC%A0%95%EB%B3%B4%EB%A5%BC-%ED%95%9C%EB%88%88%EC%97%90/id6740911495"
          target="_blank"
        >
          <Image
            src="/app-store-badge.png"
            alt="Download on the App Store"
            width={120}
            height={40}
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=app.kyulabs.hackkyo"
          target="_blank"
        >
          <Image
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={145}
            height={50}
          />
        </a>
      </div>

      {/* 앱 설명 추가 */}
      <div className="text-left w-full max-w-2xl mb-8">
        <p className="text-gray-700 mb-2">
          이제 수기로 입력할 필요 없이, NEIS 학사정보 시스템과 연동하여 최신 정보를 자동으로 받아볼 수 있어요.
        </p>
        <p className="text-gray-700 mb-6">
          학교 시간표가 변경되어도 걱정하지 마세요! 핵교가 실시간으로 업데이트해 드립니다.
        </p>
        <h4 className="text-xl font-bold text-gray-900 mb-2">주요 기능:</h4>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>실시간 시간표 확인 – NEIS 시스템과 연동하여 최신 정보를 자동 업데이트</li>
          <li>급식 메뉴 제공 – 오늘의 급식, 주간 메뉴까지 한눈에</li>
          <li>간편한 설정 – 학교 검색 후 학년·반만 선택하면 끝!</li>
          <li>직관적인 UI – 학생, 학부모 누구나 쉽게 사용할 수 있는 간편한 디자인</li>
        </ul>
        <p className="mt-4 text-gray-800 font-semibold">
          지금 핵교를 다운로드하고 쉽고 빠르게 학교 생활을 관리하세요!
        </p>
      </div>

      {/* 스크린샷 섹션 제목 */}
      <div className="flex items-center w-full max-w-2xl">
        <h3 className="text-2xl font-semibold self-start w-full mb-4 mt-16">
          스크린샷
        </h3>
      </div>

      <div className="flex gap-4 mb-6">
        <Image src="/screenshot_1.png" alt="Screenshot 1" width={150} height={300} />
        <Image src="/screenshot_2.png" alt="Screenshot 2" width={150} height={300} />
        <Image src="/screenshot_3.png" alt="Screenshot 3" width={150} height={300} />
        <Image src="/screenshot_4.png" alt="Screenshot 4" width={150} height={300} />
      </div>
    </div>
  );
}