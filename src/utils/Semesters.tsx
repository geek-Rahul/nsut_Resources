interface YoutubeLink {
  unit: string | number;
  link: string;
}

interface Subject {
  subjectName: string;
  syllabusLink?: string;
  driveLink?: string;
  youtubeLink?: YoutubeLink[];
}

interface SemesterItem {
  id: number;
  Semester: string;
  items: Subject[];
}

const Semesters: SemesterItem[] = [
  {
    id: 1,
    Semester: "Semester-1",
    items: [
      {
        subjectName: "Mathematics",
        syllabusLink:
          "https://drive.google.com/file/d/18w3aOJhv91LKzWWxWeybkuvQadx8FccR/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1NyaF_PUXxfHHqxIn_IvthcDuzs7GzcZX",
        youtubeLink: [
          {
            unit: 1,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqd8ypx6meXfTJr-QrP_Cprn",
          },
          {
            unit: 2,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqcKhaqLxMT_jyrTLacRhsSb",
          },
          {
            unit: 3,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqfcN-cRvsevGrTGMQYi7RKI",
          },
          {
            unit: 4,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqfcN-cRvsevGrTGMQYi7RKI",
          },
          {
            unit: 5,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqeOk3AI5_c67hDP4h4TMHqn",
          },
        ],
      },
      {
        subjectName: "EEE",
        syllabusLink:
          "https://drive.google.com/file/d/1dzqPQaJpq3YKzs4hzpeb8SGSX2d04UEw/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1gK5UijQGiEqThPqUKGNRz8ZIfKJkIFyC",
        youtubeLink: [
          {
            unit: "Full playlist",
            link: "https://youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS",
          },
        ],
      },
      {
        subjectName: "BME",
        syllabusLink:
          "https://drive.google.com/file/d/1eHODoW99MWorxGsVERCG9M3ocpJVtr1I/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1b75RI4KnbUtFUF4remCg_FicC4IeXeWr",
        youtubeLink: [
          {
            unit: 1,
            link: "https://youtube.com/playlist?list=PL-vEH_IPWrhATHlYXrN3q8jayOiz09ZD3",
          },
          {
            unit: 2,
            link: "https://youtube.com/playlist?list=PL-vEH_IPWrhATHlYXrN3q8jayOiz09ZD3",
          },
          {
            unit: 3,
            link: "https://youtube.com/playlist?list=PLSGws_74K01-g9nnTMBssGURHawYYQfMQ",
          },
          {
            unit: 4,
            link: "https://youtube.com/playlist?list=PLjtQ3BMex7hvIuffqJ-zD6grphZta10VZ",
          },
          {
            unit: 5,
            link: "https://youtube.com/playlist?list=PL9RcWoqXmzaLnlGN39w2-1jyFyI_ALVa3",
          },
        ],
      },
      {
        subjectName: "Chemistry",
        syllabusLink:
          "https://drive.google.com/file/d/1XoNaPr4FOUzD7EcfGZA5Wakcxw2tRHaA/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1ALTqGm0oA-hxM_qnBhdv7xeSEDV5T23s",
        youtubeLink: [
          {
            unit: "Full playlist",
            link: "https://youtube.com/playlist?list=PLm_MSClsnwm9p_yaZ8zIW1LxkK7_n98gD",
          },
        ],
      },
      {
        subjectName: "ENGLISH",
        syllabusLink:
          "https://drive.google.com/file/d/1F3ST-VlcXvYI7Z0155SFUvl8Pit2SlW4/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1BQbvjdOfusHmtAdvyOeSGMHvqJPq6U8n",
        youtubeLink: [
          {
            unit: "Full playlist",
            link: "https://youtube.com/playlist?list=PL3qvHcrYGy1sU_1nMMVrfFEhYROpQtVXV",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    Semester: "Semester-2",
    items: [
      {
        subjectName: "Computer programming",
        syllabusLink:
          "https://drive.google.com/drive/folders/10ckbLEDBReycuJ-HfWoNFrj0_cTLY6os",
        driveLink:
          "https://drive.google.com/drive/folders/1hHfosDVEIaiA5LOLlXQ6HB10hFSA4nzt",
        youtubeLink: [
          {
            unit: "C programming",
            link: "https://youtube.com/playlist?list=PLBIeYNnq4KgaqWbdDGFqQZRz47yRKWJfK",
          },
          {
            unit: "Python programming",
            link: "https://youtube.com/playlist?list=PLBIeYNnq4Kgbxvi4UI2U2TsVtn4S-95Qa",
          },
        ],
      },
      {
        subjectName: "DSA",
        syllabusLink:
          "https://drive.google.com/file/d/15DRqOJeAGkex_27GlrysN1oz-QYk7OoG/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1dyv83XTEEPWSBYJXFNZGg4e-swxEPRJR",
        youtubeLink: [
          {
            unit: 1,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqdUracqkMelPyCyKo2-I_I2",
          },
          {
            unit: 2,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqdzreRvVpb9wtZ_RJkelxnH",
          },
          {
            unit: 3,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqfMU8Rinx6E5F2T0HzTbau-",
          },
          {
            unit: 4,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqeRHJn7CTAVxObaDWYUCMXG",
          },
          {
            unit: 5,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqfbp1s98QsIZCv35Ju1Pu3l",
          },
        ],
      },
      {
        subjectName: "Physics",
        syllabusLink:
          "https://drive.google.com/file/d/1MSvHIo2ZkXVsHhxr060ch6NC3dpsIKJd/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1s21-AczYjlf3Y1z4pp8ROy6tUejv9jTe",
        youtubeLink: [
          {
            unit: 1,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqcwpg6Iq8iIWevkq6AHv8cs",
          },
          {
            unit: 2,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqc0I__aYDZyzJGBQHzjoQvU",
          },
          {
            unit: 3,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqf7TmMdIIboNC7_KGylpSCG",
          },
          {
            unit: 4,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqcot9hLiANZqDUDMMfE55IU",
          },
          {
            unit: 5,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqcot9hLiANZqDUDMMfE55IU",
          },
        ],
      },
      {
        subjectName: "ACAS",
        syllabusLink:
          "https://drive.google.com/file/d/17lxVJhCmuNVn8Ps_t_L2mNo1Tl6RdS9o/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1P4Cjr2L7g4BMHB9RkLfSKl5K1KSAjiw1",
        youtubeLink: [
          {
            unit: 1,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqd5NX_c2Si2-AfEEj7Qz4X_",
          },
          {
            unit: 2,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqcCIJSHmTvs2UkKIK-GJzUO",
          },
          {
            unit: 3,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqd5NX_c2Si2-AfEEj7Qz4X_",
          },
          {
            unit: 4,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqegyne2YK7VdtwCHLMaP5qX",
          },
          {
            unit: 5,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqeDOTDz2TkeFx8RDgy-osHI",
          },
        ],
      },
      {
        subjectName: "Maths-2",
        syllabusLink:
          "https://drive.google.com/file/d/1Dy5Rz41p9stcXdUXlFi7j97ot4WSzDvo/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1yA094uFXV5RtHuUpK_XvH4Vw4M4s72g4",
        youtubeLink: [
          {
            unit: 1,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqdplonr7kqQApAykFgRqyrA",
          },
          {
            unit: 2,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqeFBTwU7D1lLeMKk6EdpwDm",
          },
          {
            unit: 3,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqeXygPlxsdTvc56GRmMPMQ4",
          },
          {
            unit: 4,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqempPZ57F8U8LYGSMOyqAyT",
          },
          {
            unit: 5,
            link: "https://youtube.com/playlist?list=PLZ9huVhPKZqfTEuyGLXnijWZDthLihlbS",
          },
        ],
      },
      {
        subjectName: "EDC",
        syllabusLink:
          "https://drive.google.com/file/d/1PY2wzt3oxutFmk5xZ8Cu6OFiA311aj3h/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1r-xZNUAQNqQyHzzx67o5ro-ANpzQTScQ",
        youtubeLink: [
          {
            unit: 0,
            link: "https://youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    Semester: "Semester-3",
    items: [
      {
        subjectName: "MEC",
        syllabusLink:
          "https://drive.google.com/drive/folders/1Di9Y9lj-Oem1FKeaMEoPwfyzsyqGVcG2?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1Di9Y9lj-Oem1FKeaMEoPwfyzsyqGVcG2",
        youtubeLink: [
          {
            unit: 0,
            link: "https://youtube.com/playlist?list=PLs5_Rtf2P2r5MplAOADz3fTWIyBZTkGbB",
          },
        ],
      },
      {
        subjectName: "SNS",
        syllabusLink:
          "https://drive.google.com/drive/folders/16vpp1i_FNZ6hZVXZWxPQCm01KA-nRxtW?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/16vpp1i_FNZ6hZVXZWxPQCm01KA-nRxtW",
        youtubeLink: [
          {
            unit: 0,
            link: "https://youtube.com/playlist?list=PLXbLuD5WNA3J6HXu6LZVPcUJyTCOBh1f6",
          },
        ],
      },
      {
        subjectName: "PTRP",
        syllabusLink:
          "https://drive.google.com/file/d/1TxFdAd2VyAVpoJeDvlklA9lQkEsgWlYG/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1-VigQaJYuo7LH9EjphhreVGdq_0Yt1gP",
        youtubeLink: [
          {
            unit: 0,
            link: "https://youtube.com/playlist?list=PL0b9qDcBZ_XsLuFSBMc5bUGEi9J1pEBvp",
          },
        ],
      },
      {
        subjectName: "MML",
        syllabusLink:
          "https://drive.google.com/file/d/10evTYub6oclDCGiSAS-en8tHnWB1iQFp/view?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1yVXMl17NukOh6mm8Wal2lKbdxyavW-dU",
        youtubeLink: [
          {
            unit: 0,
            link: "https://youtube.com/playlist?list=PLLy_2iUCG87D1CXFxE-SxCFZUiJzQ3IvE",
          },
        ],
      },
      {
        subjectName: "DCS",
        syllabusLink:
          "https://drive.google.com/drive/folders/1_2HFpECjtY917OTZ8b5FEleDupEygy3W?usp=share_link",
        driveLink:
          "https://drive.google.com/drive/folders/1_2HFpECjtY917OTZ8b5FEleDupEygy3W",
        youtubeLink: [
          {
            unit: `1-5`,
            link: "https://youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm",
          },
          {
            unit: 0,
            link: "https://youtube.com/playlist?list=PLgwJf8NK-2e7nYSG31YWEUfwgAp2uIOBY",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    Semester: "Semester-4",
    items: [
      {
        subjectName: "MLAI",
        syllabusLink:
          "https://drive.google.com/drive/folders/1hAdFPWAaklVcPu5oq9S4Y9GV7TBAjOhi",
        driveLink:
          "https://drive.google.com/drive/folders/1IX7Z432-Zy0EAui0nU-qUD8qde4qvIVA",
        youtubeLink: [
          {
            unit: `Machine learning`,
            link: "https://youtube.com/playlist?list=PLYwpaL_SFmcBhOEPwf5cFwqo5B-cP9G4P",
          },
          {
            unit: `Artificial Intelligence`,
            link: "https://youtube.com/playlist?list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe",
          },
        ],
      },
      {
        subjectName: "EMFT",
        syllabusLink:
          "https://drive.google.com/drive/folders/16OKGFq4SBidwOZmn3RyXqOX7ExK3Txgk",
        driveLink:
          "https://drive.google.com/drive/folders/1KEtBQzqCxIMt9KKE1RfQNVrlJkNqd3-1",
        youtubeLink: [
          {
            unit: 0,
            link: "https://youtube.com/playlist?list=PLgwJf8NK-2e4I_YltJja47CwZJkzNWK89",
          },
        ],
      },
      {
        subjectName: "E DESIGN",
        syllabusLink:
          "https://drive.google.com/drive/folders/1ALuK4CuTO5SkD0cFxoJ3gzDqLYMKw9ki",
        driveLink:
          "https://drive.google.com/drive/folders/1Kv0r4qk0i_uC8dGroZ7mdEvxgo__dir5",
        youtubeLink: [
          {
            unit: `Arduino`,
            link: "https://youtube.com/playlist?list=PLVl__93X7ZlxnDtEY1_ibH-fECYEAKAQC",
          },
          {
            unit: `Power Supply`,
            link: "https://youtube.com/playlist?list=PLVl__93X7ZlwDPkK4IZwlkO_M829L3ywh",
          },
        ],
      },
      {
        subjectName: "MPCA",
        syllabusLink:
          "https://drive.google.com/drive/folders/1bg3ZWUyGF0UMJ1s_CenCvJSh00RLWTgg",
        driveLink:
          "https://drive.google.com/drive/folders/1qzMvcjgX6oIznua_gbNgbMZ-fREK2LOm",
        youtubeLink: [
          {
            unit: 0,
            link: "https://youtube.com/playlist?list=PLd7ZnpYrrolq6T74tVCuhxlqX_627_Rhy",
          },
        ],
      },
      {
        subjectName: "CE",
        syllabusLink:
          "https://drive.google.com/drive/folders/1e6_eP1wqVB7S486efgWCkjSwLVbDQKvt",
        driveLink:
          "https://drive.google.com/drive/folders/1Ar7jMefXCX3TZaXN-OXYE2XZhC5sME7Y",
        youtubeLink: [
          {
            unit: 0,
            link: "https://youtube.com/playlist?list=PLgwJf8NK-2e7uyUYrpgUUQowmRuKxRdwp",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    Semester: "Semester-5",
    items: [
      {
        subjectName: "Digital Communication",
        syllabusLink:
          "https://drive.google.com/file/d/1KOBVzboFTXTrISSvs_f-aBRgPYGUjwaD/view?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/16kaWPYTgY9NlVZ_OG-0n2i2p-G-jnz3g",
        youtubeLink: [
          {
            unit: "Full course",
            link: "https://youtube.com/playlist?list=PLgwJf8NK-2e5PngHbdEadEun5XPvnn00N&feature=shared",
          },
          {
            unit: "Full course",
            link: "https://youtube.com/playlist?list=PLA5C2F41190F383E4&feature=shared",
          },
        ],
      },
      {
        subjectName: "Digital Signal Processing",
        syllabusLink:
          "https://drive.google.com/file/d/12hte6rFmd05NePbt_KhZcb874kiskQKq/view?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/16Pe9EOUS6PkO_umNMU_BED0xP4aERLJ7",
        youtubeLink: [
          {
            unit: "Full course",
            link: "https://youtube.com/playlist?list=PLXbLuD5WNA3LFU86pSAB-b8bx_zYCkoew&si=W3Aw2nxcw5IcpCiG",
          },
        ],
      },
      {
        subjectName: "Embedded Systems",
        syllabusLink:
          "https://drive.google.com/file/d/1VSPacyniFvu2zZiyGD-QkKu9ku4ui297/view?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/1heEt6kaWi2IEgwr6tDp0aZ3EyaCYNzV-",
        youtubeLink: [
          {
            unit: "Full course",
            link: "https://youtube.com/playlist?list=PLp6ek2hDcoNAxTQ7uyp68N_RpuULV-zrX&feature=shared",
          },
          {
            unit: "Full course",
            link: "https://youtube.com/playlist?list=PLbRMhDVUMngcJu5oUhgpgYqtOn7DmSfuU&feature=shared",
          },
        ],
      },
      {
        subjectName: "Information theory secrecy and analysis",
        syllabusLink:
          "https://drive.google.com/file/d/1lzxe2h99qOWxM324PRrFxEcrKVeKu6ZN/view?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/17GHZt_okM13dhxbJmGDJvEGHAz0QMAMI",
        youtubeLink: [
          {
            unit: "Full course",
            link: "https://youtube.com/playlist?list=PLV8vIYTIdSnaigcBvSa_S1NVdHhJHz9a4&si=_aiNxcWWuWWgdgea",
          },
        ],
      },
      {
        subjectName: "Soft computing",
        syllabusLink:
          "https://drive.google.com/file/d/18kxM4xLWiEOuPJ8wspyYCWDzWz0TO59h/view?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/17ZwY7AeZsCKhgPWmdo0Q0k1WIWiBo5z7",
        youtubeLink: [
          {
            unit: "Full course",
            link: "https://youtube.com/playlist?list=PLYwpaL_SFmcCPUl8mAnb4g1oExKd0n4Gw&feature=shared",
          },
          {
            unit: "Full course",
            link: "https://youtube.com/playlist?list=PLJ5C_6qdAvBFqAYS0P9INAogIMklG8E-9&feature=shared",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    Semester: "Semester-6",
    items: [
      {
        subjectName: "Control Systems",
        syllabusLink:
          "https://drive.google.com/drive/folders/1StDFVqoj-poKa81rO97L8Uw5NhhRJQdb?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/1StDFVqoj-poKa81rO97L8Uw5NhhRJQdb?usp=drive_link",
        youtubeLink: [],
      },
      {
        subjectName: "Computer Networks",
        syllabusLink:
          "https://drive.google.com/drive/folders/1VvEcShjW3Zk2otRa2KFGifP8zoURzsqf?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/1VvEcShjW3Zk2otRa2KFGifP8zoURzsqf?usp=drive_link",
        youtubeLink: [],
      },
      {
        subjectName: "Deep Learning",
        syllabusLink:
          "https://drive.google.com/drive/folders/1UdG3179MyZA8tPPFkEHYxrE5cgrfveRo?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/1UdG3179MyZA8tPPFkEHYxrE5cgrfveRo?usp=drive_link",
        youtubeLink: [],
      },
      {
        subjectName: "Operating System",
        syllabusLink:
          "https://drive.google.com/drive/folders/1UyMFYxYPAzasB5x0_X7WuMyOB3JqbCA_?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/1UyMFYxYPAzasB5x0_X7WuMyOB3JqbCA_?usp=drive_link",
        youtubeLink: [],
      },
      {
        subjectName: "RF and Microwave",
        syllabusLink:
          "https://drive.google.com/drive/folders/1Rrln9Y4oa-0h0sQpFGi7Qenn98d1BENr?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/1Rrln9Y4oa-0h0sQpFGi7Qenn98d1BENr?usp=drive_link",
        youtubeLink: [],
      },
      {
        subjectName: "Cognitive Pschycology",
        syllabusLink:
          "https://drive.google.com/drive/folders/1jkr4JiJsjZl1wWqMFOUayAEyDnj6nCBB?usp=drive_link",
        driveLink:
          "https://drive.google.com/drive/folders/1jkr4JiJsjZl1wWqMFOUayAEyDnj6nCBB?usp=drive_link",
        youtubeLink: [],
      },
    ],
  },
];

export default Semesters;
