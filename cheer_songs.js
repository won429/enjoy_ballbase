/* ═══════════════════════════════════════════════════════════════
   구단별 응원가 데이터 (KIA 제외 — KIA는 kia_songs.js)

   ▸ 추가 방법
     1. 구단 폴더에 mp3 파일을 넣습니다.  예) lg/lg_lineup.mp3
     2. 아래 해당 구단의 배열에 한 줄 추가합니다.
        { url: 'lg/lg_lineup.mp3', title: 'LG 라인업송', label: '라인업송' }
        · url   : 파일 경로
        · title : 검색·미디어알림에 쓰이는 전체 이름
        · label : 화면에 보이는 짧은 이름
     3. 저장하고 새로고침하면 끝입니다. index.html은 건드릴 필요 없습니다.

   ▸ 분류
     team     구단 응원가 (라인업송·구단가 등)
     player   선수 응원가
     entrance 선수 등장곡
     hitout   안타송 / 아웃송

   ▸ 라인업 탭 연동
     · 구단 응원가 중 label에 '라인업송'이 들어간 곡이 맨 앞에 배치됩니다.
     · 선수 응원가·등장곡은 label 또는 title에 선수 이름이 들어 있으면
       그날 타순에 맞춰 자동 정렬됩니다. 예) label: '5. 김도영'
   ═══════════════════════════════════════════════════════════════ */

const cheerSongs = {

    /* 삼성 라이온즈 ─────────────────────────────────────────── */
    samsung: {
        team: [
            { url: 'samsung/samsung_lineup.mp3', title: '삼성 라인업송', label: '라인업송' },
            { url: 'samsung/samsung_eldorado.mp3', title: '삼성 엘도라도', label: '엘도라도' },
            { url: 'samsung/samsung_jijunghae.mp3', title: '삼성 지중해', label: '지중해' }
        ],
        player: [
            { url: 'samsung/samsung_gu_jawook.mp3', title: '삼성 구자욱', label: '구자욱' },
            { url: 'samsung/samsung_gu_jawook_moonlight.mp3', title: '삼성 구자욱(달빛소년)', label: '구자욱(달빛소년)' },
            { url: 'samsung/samsung_choi_hyoungwoo.mp3', title: '삼성 최형우', label: '최형우' },
            { url: 'samsung/samsung_diaz.mp3', title: '삼성 디아즈', label: '디아즈' },
            { url: 'samsung/samsung_lee_jaehyun.mp3', title: '삼성 이재현', label: '이재현' },
            { url: 'samsung/samsung_kim_hyunjun.mp3', title: '삼성 김현준', label: '김현준' },
            { url: 'samsung/samsung_kim_sungyoon.mp3', title: '삼성 김성윤', label: '김성윤' },
            { url: 'samsung/samsung_kim_jichan.mp3', title: '삼성 김지찬', label: '김지찬' },
            { url: 'samsung/samsung_kang_minho.mp3', title: '삼성 강민호', label: '강민호' },
            { url: 'samsung/samsung_shim_jaehun.mp3', title: '삼성 심재훈', label: '심재훈' },
            { url: 'samsung/samsung_kim_jaesung.mp3', title: '삼성 김재성', label: '김재성' },
            { url: 'samsung/samsung_ryu_jihyuk.mp3', title: '삼성 류지혁', label: '류지혁' },
            { url: 'samsung/samsung_lee_byunghun.mp3', title: '삼성 이병헌', label: '이병헌' },
            { url: 'samsung/samsung_lee_sunggyu1.mp3', title: '삼성 이성규1', label: '이성규1' },
            { url: 'samsung/samsung_lee_sunggyu2.mp3', title: '삼성 이성규2', label: '이성규2' },
            { url: 'samsung/samsung_kim_youngwoong.mp3', title: '삼성 김영웅', label: '김영웅' },
            { url: 'samsung/samsung_kim_taehun.mp3', title: '삼성 김태훈', label: '김태훈' },
            { url: 'samsung/samsung_lee_haeseung.mp3', title: '삼성 이해승', label: '이해승' },
            { url: 'samsung/samsung_park_seunggyu.mp3', title: '삼성 박승규', label: '박승규' },
            { url: 'samsung/samsung_park_byungho.mp3', title: '삼성 박병호', label: '박병호' },
            { url: 'samsung/samsung_yoon_jungbin.mp3', title: '삼성 윤정빈', label: '윤정빈' },
            { url: 'samsung/samsung_kim_heongon.mp3', title: '삼성 김헌곤', label: '김헌곤' },
            { url: 'samsung/samsung_yang_woohyun.mp3', title: '삼성 양우현', label: '양우현' },
            { url: 'samsung/samsung_jeon_byungwoo.mp3', title: '삼성 전병우', label: '전병우' },
            { url: 'samsung/samsung_kim_taegun.mp3', title: '삼성 김태군', label: '김태군' },
            { url: 'samsung/samsung_park_sehyuk.mp3', title: '삼성 박세혁', label: '박세혁' }
        ],
        entrance: [
            { url: 'samsung/samsung_gu_jawook_entrance.mp3', title: '삼성 구자욱 등장곡', label: '구자욱 등장곡' },
            { url: 'samsung/samsung_choi_hyoungwoo_entrance.mp3', title: '삼성 최형우 등장곡', label: '최형우 등장곡' },
            { url: 'samsung/samsung_diaz_entrance.mp3', title: '삼성 디아즈 등장곡', label: '디아즈 등장곡' },
            { url: 'samsung/samsung_lee_jaehyun_entrance.mp3', title: '삼성 이재현 등장곡', label: '이재현 등장곡' },
            { url: 'samsung/samsung_kim_hyunjun_entrance.mp3', title: '삼성 김현준 등장곡', label: '김현준 등장곡' },
            { url: 'samsung/samsung_kim_sungyoon_entrance.mp3', title: '삼성 김성윤 등장곡', label: '김성윤 등장곡' },
            { url: 'samsung/samsung_kim_jichan_entrance.mp3', title: '삼성 김지찬 등장곡', label: '김지찬 등장곡' },
            { url: 'samsung/samsung_kang_minho_entrance.mp3', title: '삼성 강민호 등장곡', label: '강민호 등장곡' },
            { url: 'samsung/samsung_shim_jaehun_entrance.mp3', title: '삼성 심재훈 등장곡', label: '심재훈 등장곡' },
            { url: 'samsung/samsung_kim_jaesung_entrance.mp3', title: '삼성 김재성 등장곡', label: '김재성 등장곡' },
            { url: 'samsung/samsung_ryu_jihyuk_entrance.mp3', title: '삼성 류지혁 등장곡', label: '류지혁 등장곡' },
            { url: 'samsung/samsung_lee_byunghun_entrance.mp3', title: '삼성 이병헌 등장곡', label: '이병헌 등장곡' },
            { url: 'samsung/samsung_lee_sunggyu_entrance.mp3', title: '삼성 이성규 등장곡', label: '이성규 등장곡' },
            { url: 'samsung/samsung_kim_youngwoong_entrance.mp3', title: '삼성 김영웅 등장곡', label: '김영웅 등장곡' },
            { url: 'samsung/samsung_kim_taehun_entrance.mp3', title: '삼성 김태훈 등장곡', label: '김태훈 등장곡' },
            { url: 'samsung/samsung_lee_haeseung_entrance.mp3', title: '삼성 이해승 등장곡', label: '이해승 등장곡' },
            { url: 'samsung/samsung_park_seunggyu_entrance.mp3', title: '삼성 박승규 등장곡', label: '박승규 등장곡' },
            { url: 'samsung/samsung_park_byungho_entrance.mp3', title: '삼성 박병호 등장곡', label: '박병호 등장곡' },
            { url: 'samsung/samsung_yoon_jungbin_entrance.mp3', title: '삼성 윤정빈 등장곡', label: '윤정빈 등장곡' },
            { url: 'samsung/samsung_kim_heongon_entrance.mp3', title: '삼성 김헌곤 등장곡', label: '김헌곤 등장곡' },
            { url: 'samsung/samsung_yang_woohyun_entrance.mp3', title: '삼성 양우현 등장곡', label: '양우현 등장곡' },
            { url: 'samsung/samsung_jeon_byungwoo_entrance.mp3', title: '삼성 전병우 등장곡', label: '전병우 등장곡' },
            { url: 'samsung/samsung_kim_taegun_entrance.mp3', title: '삼성 김태군 등장곡', label: '김태군 등장곡' },
            { url: 'samsung/samsung_park_sehyuk_entrance.mp3', title: '삼성 박세혁 등장곡', label: '박세혁 등장곡' }
        ],
        hitout: [
            { url: 'samsung/gajagaja.mp3', title: '삼성 안타송(가자가자)', label: '안타송(가자가자)' },
            { url: 'samsung/samsung_out_rumble.mp3', title: '삼성 2026 아웃송(럼블)', label: '2026 아웃송(럼블)' },
            { url: 'samsung/samsung_out_destiny.mp3', title: '삼성 2026 아웃송(운명)', label: '2026 아웃송(운명)' },
            { url: 'samsung/samsung_out_eulssu.mp3', title: '삼성 2026 아웃송(얼쑤)', label: '2026 아웃송(얼쑤)' },
            { url: 'samsung/samsung_out_march.mp3', title: '삼성 2026 아웃송(March)', label: '2026 아웃송(March)' },
            { url: 'samsung/samsung_out_wait.mp3', title: '삼성 2025 아웃송(WAIT)', label: '2025 아웃송(WAIT)' },
            { url: 'samsung/samsung_out_ratata.mp3', title: '삼성 2025 아웃송(RATATA)', label: '2025 아웃송(RATATA)' },
            { url: 'samsung/samsung_out_cheerup.mp3', title: '삼성 2025 아웃송(Cheer Up)', label: '2025 아웃송(Cheer Up)' }
        ]
    },

    /* LG 트윈스 ─── 음원 추가 위치: lg/ 폴더 ─────────────────── */
    lg: { team: [], player: [], entrance: [], hitout: [] },

    /* 두산 베어스 ─── 음원 추가 위치: doosan/ 폴더 ───────────── */
    doosan: { team: [], player: [], entrance: [], hitout: [] },

    /* KT 위즈 ─── 음원 추가 위치: kt/ 폴더 ───────────────────── */
    kt: { team: [], player: [], entrance: [], hitout: [] },

    /* SSG 랜더스 ─── 음원 추가 위치: ssg/ 폴더 ───────────────── */
    ssg: { team: [], player: [], entrance: [], hitout: [] },

    /* 롯데 자이언츠 ─── 음원 추가 위치: lotte/ 폴더 ──────────── */
    lotte: { team: [], player: [], entrance: [], hitout: [] },

    /* 한화 이글스 ─── 음원 추가 위치: hanwha/ 폴더 ───────────── */
    hanwha: { team: [], player: [], entrance: [], hitout: [] },

    /* NC 다이노스 ─── 음원 추가 위치: nc/ 폴더 ───────────────── */
    nc: { team: [], player: [], entrance: [], hitout: [] },

    /* 키움 히어로즈 ─── 음원 추가 위치: kiwoom/ 폴더 ─────────── */
    kiwoom: { team: [], player: [], entrance: [], hitout: [] }
};
