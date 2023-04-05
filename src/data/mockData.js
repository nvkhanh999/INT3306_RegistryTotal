import { tokens } from "../theme";
/* Dữ liệu trong 12 tháng gần nhất về số lượng xe đăng kiểm của từng khu vực*/

export const mockLineData = [
    {
      id: "Miền Bắc",
      color: tokens("dark").greenAccent[500],
      data: [
        {
          x: "T6/22",
          y: 36,
        },
        {
          x: "T7/22",
          y: 216,
        },
        {
          x: "T8/22",
          y: 35,
        },
        {
          x: "T9/22",
          y: 236,
        },
        {
          x: "T10/22",
          y: 88,
        },
        {
          x: "T11/22",
          y: 232,
        },
        {
          x: "T12/22",
          y: 281,
        },
        {
          x: "T1/23",
          y: 1,
        },
        {
          x: "T2/23",
          y: 35,
        },
        {
          x: "T3/23",
          y: 14,
        },
        {
            x:"T4/23(dự báo)",
            y: 20,
        }
      ],
    },
    {
      id: "Miền Trung",
      color: tokens("dark").blueAccent[300],
      data: [
        {
          x: "T6/22",
          y: 270,
        },
        {
          x: "T7/22",
          y: 9,
        },
        {
          x: "T8/22",
          y: 75,
        },
        {
          x: "T9/22",
          y: 175,
        },
        {
          x: "T10/22",
          y: 33,
        },
        {
          x: "T11/22",
          y: 189,
        },
        {
          x: "T12/22",
          y: 97,
        },
        {
          x: "T1/23",
          y: 87,
        },
        {
          x: "T2/23",
          y: 299,
        },
        {
          x: "T3/23",
          y: 251,
        },
        {
            x:"T4/23(dự báo)",
            y: 224,
        }
      ],
    },
    {
      id: "Miền Nam",
      color: tokens("dark").redAccent[200],
      data: [

        {
          x: "T6/22",
          y: 91,
        },
        {
          x: "T7/22",
          y: 190,
        },
        {
          x: "T8/22",
          y: 211,
        },
        {
          x: "T9/22",
          y: 152,
        },
        {
          x: "T10/22",
          y: 189,
        },
        {
          x: "T11/22",
          y: 152,
        },
        {
          x: "T12/22",
          y: 8,
        },
        {
          x: "T1/23",
          y: 197,
        },
        {
          x: "T2/23",
          y: 107,
        },
        {
          x: "T3/23",
          y: 170,
        },
        {
            x:"T4/23(dự báo)",
            y: 160,
        }
      ],
    },
  ];

  export const mockPieData = [
    {
      id: "Xe khách",
      label: "Xe khách",
      value: 239,
      color: "hsl(104, 70%, 50%)",
    },
    {
      id: "Xe bán tải",
      label: "Xe bán tải",
      value: 170,
      color: "hsl(162, 70%, 50%)",
    },
    {
      id: "Xe tải",
      label: "Xe tải",
      value: 322,
      color: "hsl(291, 70%, 50%)",
    },
    {
      id: "Xe con",
      label: "Xe con",
      value: 503,
      color: "hsl(229, 70%, 50%)",
    },
    {
      id: "Xe chuyên dùng",
      label: "Xe chuyên dùng",
      value: 584,
      color: "hsl(344, 70%, 50%)",
    },
  ];
  