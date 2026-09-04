/* ============================================
   中国青少年美式装备橄榄球地图图鉴
   Main JavaScript - 数据来源参考网站
   ============================================ */

// ========================
// PLACEHOLDER SVG
// ========================
const placeholderSVG = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iNDYiIHZpZXdCb3g9IjAgMCA0NiA0NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjMiIGN5PSIyMyIgcj0iMjAiIGZpbGw9IiM2QjcyODAiLz4KPGNpcmNsZSBjeD0iMjMiIGN5PSIyMyIgcj0iMTciIGZpbGw9IiNFNUU3RUIiLz4KPHBhdGggZD0iTTIzIDEyVjM0TTE0IDIzSDMyIiBzdHJva2U9IiM2QjcyODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=';

// ========================
// TEAM LOGO MAP (matches reference exactly)
// ========================
const teamLogos = {
  "广州骑士": "logos/guangzhou-knights.png",
  "广州白鳍豚": "logos/guangzhou-dolphins.png",
  "佛山小兕虎": "logos/foshan-xiaoxihu.png",
  "珠海海东青": "logos/zhuhai-gyrfalcon.png",
  "深圳鲲鹏": "logos/shenzhen-kunpeng.png",
  "广州黑骑士": "logos/guangzhou-blackknight.png",
  "深圳热浪": "logos/shenzhen-heatwave.png",
  "深圳火箭熊": "logos/shenzhen-rocketbear.png",
  "上海烽火狼": "logos/shanghai-firewolf.png",
  "上海鹰": "logos/shanghai-eagle.png",
  "上海蓝魔": "logos/shanghai-bluedevil.png",
  "上海Chang飓风": "logos/shanghai-changhurricane.png",
  "上海鳄鱼": "logos/shanghai-crocodile.png",
  "上海银河": "logos/shanghai-galaxy.png",
  "上海坚毅坦克": "logos/shanghai-tank.png",
  "上海AFA鲨鱼": "logos/shanghai-afashark.png",
  "上海飓风角斗士": "logos/shanghai-hurricangladiator.png",
  "上海幽灵虎": "logos/shanghai-ghosttiger.png",
  "南京征服者": "logos/nanjing-conqueror.png",
  "南京雄狮": "logos/nanjing-lions.png",
  "苏州蓝骑士": "logos/suzhou-blueknight.png",
  "杭州将军": "logos/hangzhou-general.png",
  "杭州猛虎": "logos/hangzhou-tiger.png",
  "杭州四叶草": "logos/hangzhou-clover.png",
  "温州赤鹿青训": "logos/wenzhou-reddeer.png",
  "西安传奇": "logos/xian-legend.png",
  "成都川渝幼狮联队": "logos/chengdu-chuanyuteacher.png",
  "成都太阳鸟": "logos/chengdu-sunbird.png",
  "成都红潮": "logos/chengdu-redtide.png",
  "成都飞虎": "logos/chengdu-flyingtigers.png",
  "武汉change巴萨卡": "logos/wuhan-changeberserker.png",
  "武汉change眼镜蛇": "logos/wuhan-changecobra.png",
  "武汉赤焰": "logos/wuhan-chiyan.png",
  "武汉猎豹": "logos/wuhan-cheetah.png",
  "北京维肯": "logos/beijing-wiking.png",
  "北京黑曼巴": "logos/beijing-blackmamba.png",
  "北京雄狮": "logos/beijing-lion.png",
  "青岛虎鲸": "logos/qingdao-orca.png",
  "济南眼镜蛇": "logos/jinan-cobra.png",
  "东营火凤凰": "logos/dongying-huofenghuang.png"
};

// ========================
// CITY DATA (matches reference exactly)
// ========================
const citiesData = [
  // 广东地区
  {
    id: "guangzhou", name: "广州",
    center: [23.1291, 113.2644], color: "#3b82f6", region: "华南",
    teams: [
      { name: "广州骑士", age: "U11 / U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2023秋季", age: "U15", title: "Y-League 冠军", note: "" },
          { season: "2022", age: "U16", title: "广东省橄榄球锦标赛 冠军", note: "极速达阵橄榄球俱乐部队" },
          { season: "2023", age: "U10", title: "广东省橄榄球锦标赛 季军", note: "广州极速达阵骑士队" },
          { season: "2023", age: "U12", title: "广东省橄榄球锦标赛 亚军", note: "广州极速达阵独角兽队" },
          { season: "2023", age: "U18", title: "广东省橄榄球锦标赛 冠军", note: "广州极速达阵骑士队" },
          { season: "2024", age: "U9", title: "广东省橄榄球锦标赛 季军", note: "极速达阵队" },
          { season: "2024", age: "U11", title: "广东省橄榄球锦标赛 冠军", note: "" },
          { season: "2024", age: "U13", title: "广东省橄榄球锦标赛 亚军", note: "极速达阵队" }
        ]
      },
      { name: "广州白鳍豚", age: "U13", founded: "待确认", coach: "待确认", league: "CYFL" },
      { name: "广州黑骑士", age: "U10", founded: "待确认", coach: "待确认" }
    ]
  },
  {
    id: "shenzhen", name: "深圳",
    center: [22.5431, 114.0579], color: "#10b981", region: "华南",
    teams: [
      { name: "深圳鲲鹏", age: "U13", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2023", age: "U10", title: "广东省橄榄球锦标赛 亚军", note: "深圳天行达阵袭击者队" },
          { season: "2023", age: "U12", title: "广东省橄榄球锦标赛 冠军", note: "深圳天行达阵大勇士队" },
          { season: "2023", age: "U14", title: "广东省橄榄球锦标赛 亚军", note: "深圳天行达阵勇士队" },
          { season: "2024", age: "U9", title: "广东省橄榄球锦标赛 亚军", note: "" },
          { season: "2024", age: "U13", title: "广东省橄榄球锦标赛 季军", note: "" }
        ]
      },
      { name: "深圳热浪", age: "U13", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2023", age: "U10", title: "广东省橄榄球锦标赛 冠军", note: "深圳天行达阵热浪队" },
          { season: "2024", age: "U11", title: "广东省橄榄球锦标赛 亚军", note: "" }
        ]
      },
      { name: "深圳火箭熊", age: "U10", founded: "待确认", coach: "待确认" }
    ]
  },
  {
    id: "foshan", name: "佛山",
    center: [23.0215, 113.1214], color: "#8b5cf6", region: "华南",
    teams: [
      { name: "佛山小兕虎", age: "U9 / U11 / U13 / U15", founded: "2017", coach: "康师傅，肥鸡", league: "CYFL",
        honors: [
          { season: "2024-25", age: "U13", title: "Y-League 冠军", note: "" },
          { season: "2022", age: "U10", title: "广东省橄榄球锦标赛 冠军", note: "佛山南海天行达阵俱乐部" },
          { season: "2022", age: "U12", title: "广东省橄榄球锦标赛 冠军", note: "佛山南海天行达阵俱乐部" },
          { season: "2023", age: "U12", title: "广东省橄榄球锦标赛 季军", note: "南海天行达阵小兕虎联队" },
          { season: "2023", age: "U14", title: "广东省橄榄球锦标赛 冠军", note: "南海天行达阵小兕虎队" },
          { season: "2023", age: "U18", title: "广东省橄榄球锦标赛 亚军", note: "南海天行达阵小兕虎队" },
          { season: "2024", age: "U9", title: "广东省橄榄球锦标赛 冠军", note: "" },
          { season: "2024", age: "U11", title: "广东省橄榄球锦标赛 季军", note: "" },
          { season: "2024", age: "U13", title: "广东省橄榄球锦标赛 冠军", note: "" },
          { season: "2025-26", age: "U11", title: "Y-League 亚军", note: "" }
        ]
      }
    ]
  },
  {
    id: "zhuhai", name: "珠海",
    center: [22.2707, 113.5767], color: "#f59e0b", region: "华南",
    teams: [
      { name: "珠海海东青", age: "待确认", founded: "待确认", coach: "待确认" }
    ]
  },
  // 上海地区
  {
    id: "shanghai", name: "上海",
    center: [31.2304, 121.4737], color: "#ef4444", region: "华东",
    teams: [
      { name: "上海烽火狼", age: "U9 / U11 / U13", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2025-26", age: "U15", title: "Y-League 冠军", note: "" }
        ]
      },
      { name: "上海鹰", age: "U9 / U11 / U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2021秋季", age: "U9", title: "Y-League 冠军", note: "上海朱雀" },
          { season: "2023秋季", age: "U9", title: "Y-League 冠军", note: "上海朱雀" },
          { season: "2023秋季", age: "U13", title: "Y-League 冠军", note: "上海朱雀" },
          { season: "2024春季", age: "U9", title: "Y-League 冠军", note: "上海朱雀" },
          { season: "2024-25", age: "U11", title: "Y-League 冠军", note: "上海鹰蓝" },
          { season: "2024-25", age: "U14", title: "Y-League 冠军", note: "" },
          { season: "2025-26", age: "U9", title: "Y-League 冠军", note: "上海鹰蓝" },
          { season: "2025-26", age: "U13", title: "Y-League 冠军", note: "上海鹰蓝" },
          { season: "2025-26", age: "U15", title: "Y-League 亚军", note: "" }
        ]
      },
      { name: "上海蓝魔", age: "U11 / U13", founded: "待确认", coach: "待确认" },
      { name: "上海Chang飓风", age: "U11", founded: "待确认", coach: "待确认" },
      { name: "上海鳄鱼", age: "U9 / U11 / U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2023春季", age: "U11", title: "Y-League 冠军", note: "" },
          { season: "2023秋季", age: "U11", title: "Y-League 冠军", note: "" },
          { season: "2024春季", age: "U11", title: "Y-League 冠军", note: "" },
          { season: "2024", age: "U9", title: "DYFL 亚军", note: "" },
          { season: "2024", age: "U11", title: "DYFL 冠军", note: "" },
          { season: "2024", age: "U13", title: "DYFL 亚军", note: "" },
          { season: "2025春季", age: "U9", title: "DYFL 亚军", note: "" },
          { season: "2025春季", age: "U11", title: "DYFL 亚军", note: "" },
          { season: "2025春季", age: "U13", title: "DYFL 亚军", note: "" },
          { season: "2026春季", age: "U9", title: "DYFL 冠军", note: "" },
          { season: "2026春季", age: "U13", title: "DYFL 季军", note: "" }
        ]
      },
      { name: "上海银河", age: "U9 / U11 / U13 / U15", founded: "2021-9", coach: "Stone, Josh", league: "CYFL",
        honors: [
          { season: "2021秋季", age: "U11", title: "Y-League 冠军", note: "" },
          { season: "2021秋季", age: "U13", title: "Y-League 冠军", note: "" },
          { season: "2023春季", age: "U13", title: "Y-League 冠军", note: "" },
          { season: "2024春季", age: "U13", title: "Y-League 冠军", note: "" },
          { season: "2024", age: "U13", title: "DYFL 冠军", note: "" },
          { season: "2025春季", age: "U11", title: "DYFL 冠军", note: "" },
          { season: "2025春季", age: "U13", title: "DYFL 冠军", note: "" },
          { season: "2026春季", age: "U9", title: "DYFL 季军", note: "" },
          { season: "2026春季", age: "U11", title: "DYFL 冠军", note: "" },
          { season: "2026春季", age: "U13", title: "DYFL 冠军", note: "" }
        ]
      },
      { name: "上海坚毅坦克", age: "U9 / U11", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2022秋季", age: "U9", title: "Y-League 冠军", note: "" },
          { season: "2022秋季", age: "U11", title: "Y-League 冠军", note: "" },
          { season: "2024", age: "U9", title: "DYFL 冠军", note: "" },
          { season: "2025春季", age: "U9", title: "DYFL 冠军", note: "" },
          { season: "2025-26", age: "U9", title: "Y-League 亚军", note: "" }
        ]
      },
      { name: "上海AFA鲨鱼", age: "U9 / U11 / U12 / U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2026春季", age: "U11", title: "DYFL 季军", note: "" },
          { season: "2026春季", age: "U12", title: "DYFL 冠军", note: "" },
          { season: "2026春季", age: "U13", title: "DYFL 亚军", note: "" }
        ]
      },
      { name: "上海飓风角斗士", age: "U9 / U11 / U12 / U13", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2026春季", age: "U12", title: "DYFL 季军", note: "" }
        ]
      },
      { name: "上海幽灵虎", age: "U9", founded: "待确认", coach: "待确认" }
    ]
  },
  // 江苏地区
  {
    id: "nanjing", name: "南京",
    center: [32.0603, 118.7969], color: "#06b6d4", region: "华东",
    teams: [
      { name: "南京征服者", age: "U11 / U13", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2026春季", age: "U11", title: "DYFL 亚军", note: "" }
        ]
      },
      { name: "南京雄狮", age: "U11", founded: "待确认", coach: "待确认", league: "CYFL" }
    ]
  },
  {
    id: "suzhou", name: "苏州",
    center: [31.2989, 120.5853], color: "#ec4899", region: "华东",
    teams: [
      { name: "苏州蓝骑士", age: "U9 / U11 / U13", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2026春季", age: "U9", title: "DYFL 亚军", note: "" }
        ]
      }
    ]
  },
  // 浙江地区
  {
    id: "hangzhou", name: "杭州",
    center: [30.2741, 120.1551], color: "#84cc16", region: "华东",
    teams: [
      { name: "杭州将军", age: "U11", founded: "待确认", coach: "待确认" },
      { name: "杭州猛虎", age: "U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL" },
      { name: "杭州四叶草", age: "待确认", founded: "待确认", coach: "待确认" }
    ]
  },
  // 温州地区
  {
    id: "wenzhou", name: "温州",
    center: [27.9943, 120.6994], color: "#a855f7", region: "华东",
    teams: [
      { name: "温州赤鹿青训", age: "待确认", founded: "待确认", coach: "待确认" }
    ]
  },
  // 西安
  {
    id: "xian", name: "西安",
    center: [34.3416, 108.9398], color: "#8b5cf6", region: "西北",
    teams: [
      { name: "西安传奇", age: "U11 / U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL" }
    ]
  },
  // 成都
  {
    id: "chengdu", name: "成都",
    center: [30.5728, 104.0668], color: "#f59e0b", region: "西南",
    teams: [
      { name: "成都川渝幼狮联队", age: "待确认", founded: "待确认", coach: "待确认" },
      { name: "成都太阳鸟", age: "待确认", founded: "待确认", coach: "待确认", league: "CYFL" },
      { name: "成都红潮", age: "待确认", founded: "待确认", coach: "待确认" },
      { name: "成都飞虎", age: "待确认", founded: "待确认", coach: "待确认" }
    ]
  },
  // 武汉
  {
    id: "wuhan", name: "武汉",
    center: [30.5928, 114.3055], color: "#10b981", region: "华中",
    teams: [
      { name: "武汉change巴萨卡", age: "U9 / U11 / U13 / U15", founded: "待确认", coach: "待确认",
        honors: [
          { season: "2023春季", age: "U9", title: "Y-League 冠军", note: "武汉战隼" },
          { season: "2025-26", age: "U13", title: "Y-League 亚军", note: "" }
        ]
      },
      { name: "武汉change眼镜蛇", age: "U11", founded: "待确认", coach: "待确认",
        honors: [
          { season: "2024-25", age: "U9", title: "Y-League 冠军", note: "" },
          { season: "2025-26", age: "U11", title: "Y-League 冠军", note: "" }
        ]
      },
      { name: "武汉赤焰", age: "待确认", founded: "待确认", coach: "待确认" },
      { name: "武汉猎豹", age: "U11 / U13", founded: "2026", coach: "待确认", league: "CYFL" }
    ]
  },
  // 北京
  {
    id: "beijing", name: "北京",
    center: [39.9042, 116.4074], color: "#3b82f6", region: "华北",
    teams: [
      { name: "北京维肯", age: "U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL" },
      { name: "北京黑曼巴", age: "U9 / U11 / U12 / U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2026春季", age: "U12", title: "DYFL 亚军", note: "" }
        ]
      },
      { name: "北京雄狮", age: "待确认", founded: "待确认", coach: "待确认" }
    ]
  },
  // 青岛
  {
    id: "qingdao", name: "青岛",
    center: [36.0671, 120.3826], color: "#06b6d4", region: "华东",
    teams: [
      { name: "青岛虎鲸", age: "U11 / U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL" }
    ]
  },
  // 济南
  {
    id: "jinan", name: "济南",
    center: [36.6512, 117.1200], color: "#ec4899", region: "华东",
    teams: [
      { name: "济南眼镜蛇", age: "待确认", founded: "待确认", coach: "待确认" }
    ]
  },
  // 东营
  {
    id: "dongying", name: "东营",
    center: [37.433, 118.674], color: "#f97316", region: "华东",
    teams: [
      { name: "东营火凤凰", age: "待确认", founded: "待确认", coach: "待确认" }
    ]
  }
];

// Total counts
const totalCities = citiesData.length;
const totalTeams = citiesData.reduce((sum, c) => sum + c.teams.length, 0);

// ========================
// LEAFLET MAP INIT
// ========================
const map = L.map('map', {
  zoomControl: true,
  preferCanvas: true,
  zoomSnap: 0.5,
  wheelPxPerZoomLevel: 120
});
window._map = map;

// 初始视野：自动框住全部 16 个城市（fitBounds），避免四周大片空白
const nationalBounds = L.latLngBounds(citiesData.map(c => c.center));

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '',
  maxZoom: 18,
  subdomains: 'abcd'
}).addTo(map);

// ========================
// RENDER STATE
// ========================
const allMarkers = {};
const allConnectors = {};
let activeCityId = null;

// ========================
// FILTER STATE
// ========================
let activeFilters = {
  region: 'all',
  citiesAll: true,
  age: 'all',
  search: ''
};

// ========================
// TEAM POSITIONING (Golden Ratio Spiral - matches reference)
// ========================
function calculateTeamPositions(center, teamCount) {
  if (teamCount === 1) return [center];

  const positions = [];
  // 紧凑布局：半径较原版缩小约 40%，球队标记更贴城市中心
  const baseRadius = (0.08 + teamCount * 0.006) * 0.6;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < teamCount; i++) {
    const r = baseRadius * Math.sqrt(i + 1);
    const angle = i * goldenAngle;
    const lat = center[0] + Math.sin(angle) * r * 0.7;
    const lng = center[1] + Math.cos(angle) * r;
    positions.push([lat, lng]);
  }

  return positions;
}

// ========================
// RENDER CITY - matches reference style exactly
// ========================
function renderCity(city, visible) {
  if (visible === undefined) visible = true;

  // 清除该城市现有的标记和连接线
  if (allMarkers[city.id]) {
    allMarkers[city.id].forEach(marker => map.removeLayer(marker));
    delete allMarkers[city.id];
  }

  if (allConnectors[city.id]) {
    allConnectors[city.id].forEach(connector => map.removeLayer(connector));
    delete allConnectors[city.id];
  }

  if (!visible) return;

  // 根据筛选条件过滤球队
  const filteredTeams = city.teams.filter(team => {
    if (activeFilters.search &&
        !team.name.toLowerCase().includes(activeFilters.search.toLowerCase()) &&
        !city.name.toLowerCase().includes(activeFilters.search.toLowerCase())) {
      return false;
    }
    if (activeFilters.age !== 'all' && activeFilters.age !== '') {
      if (!team.age.includes(activeFilters.age)) {
        return false;
      }
    }
    return true;
  });

  if (filteredTeams.length === 0) return;

  const teamPositions = calculateTeamPositions(city.center, filteredTeams.length);

  allMarkers[city.id] = [];
  allConnectors[city.id] = [];

  // 城市中心发光点 + 脉冲光环 + 城市名（hover 显示球队数）
  const cityIcon = L.divIcon({
    className: 'city-center-marker',
    html: `
      <div class="city-center" style="--cc:${city.color}">
        <span class="city-center-ring"></span>
        <span class="city-center-ring r2"></span>
        <span class="city-center-dot"></span>
        <span class="city-center-name">${city.name}</span>
      </div>
    `,
    iconSize: [0, 0],
    iconAnchor: [0, 0]
  });
  const cityMarker = L.marker(city.center, { icon: cityIcon, interactive: false, keyboard: false, pane: 'cityCenterPane' })
    .addTo(map)
    .bindTooltip(`${city.name} · ${filteredTeams.length} 支球队`, {
      direction: 'top', offset: [0, -14], className: 'team-tooltip', opacity: 0.95
    });
  allMarkers[city.id].push(cityMarker);

  // 绘制连接线 (only if >1 team) —— 用 SVG 渲染器以支持流动动画
  if (filteredTeams.length > 1) {
    teamPositions.forEach(position => {
      const connector = L.polyline([city.center, position], {
        className: 'city-connector flow',
        color: city.color,
        weight: 1.5,
        opacity: 0.4,
        smoothFactor: 1,
        renderer: L.svg()
      }).addTo(map);
      allConnectors[city.id].push(connector);
    });
  }

  // 绘制球队标记
  filteredTeams.forEach((team, index) => {
    const teamPosition = teamPositions[index];
    const logoUrl = teamLogos[team.name] || 'logos/placeholder.png';

    const icon = L.divIcon({
      className: 'team-marker',
      html: `
        <div class="team-icon" style="border-color: ${city.color}">
          <img src="${logoUrl}" alt="${team.name} Logo" onerror="this.src='${placeholderSVG}'">
        </div>
      `,
      iconSize: [58, 58],
      iconAnchor: [29, 29],
      popupAnchor: [0, -29]
    });

    const marker = L.marker(teamPosition, { icon })
      .addTo(map)
      .bindTooltip(team.name, {
        permanent: false,
        direction: 'top',
        offset: [0, -35],
        className: 'team-tooltip',
        opacity: 0.95
      })
      .bindPopup(`
        <div class="card-popup">
          <div class="cp-edge"></div>
          <div class="cp-shine"></div>
          <div class="cp-inner">
            <div class="cp-top">
              <div class="cp-badge">
                <img src="${logoUrl}" alt="${team.name} Logo" onerror="this.src='${placeholderSVG}'">
              </div>
              <div class="cp-headtxt">
                <h3 class="cp-name">${team.name}</h3>
                <span class="cp-sub">${city.name} · ${city.region}</span>
              </div>
            </div>
            <div class="cp-row">
              <span class="cp-chip green">梯队 <b>${team.age}</b></span>
              ${team.league ? `<span class="cp-chip gold">联盟 ${team.league}</span>` : ''}
            </div>
            <div class="cp-body">
              <p><span class="cp-label">项目</span>美式足球（装备）</p>
              <p><span class="cp-label">成立</span>${team.founded}</p>
              <p><span class="cp-label">教练</span>${team.coach}</p>
            </div>
            ${team.honors && team.honors.length > 0 ? (() => {
              const medalCls = (t) => {
                if (t.indexOf('亚军') > -1) return 's';
                if (t.indexOf('季军') > -1) return 'b';
                return 'g';
              };
              const yearOf = (s) => {
                const m = String(s).match(/(\d{4})/);
                return m ? parseInt(m[1], 10) : 0;
              };
              // 排序：先按年份，同年内跨年赛季（含-）排在纯年份后面
              const sortKey = (s) => {
                const y = yearOf(s);
                const dash = String(s).indexOf('-') > -1 ? 1 : 0;
                return y * 10 + dash;
              };
              const sortedHonors = team.honors.slice().sort((a, b) => sortKey(a.season) - sortKey(b.season));
              return `
                <div class="cp-honors">
                  <div class="cp-honors-head" onclick="window.toggleHonors(this)">
                    <span>🏆 成就 (${team.honors.length})</span>
                    <span class="cp-arrow">▼</span>
                  </div>
                  <div class="cp-honors-list collapsed">
                    ${sortedHonors.map(h => {
                      const t = h.title || '冠军';
                      return `
                        <div class="cp-honor-item">
                          <span class="cp-medal ${medalCls(t)}"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8L12 2z" fill="currentColor"/></svg></span>
                          <span class="cp-honor-txt"><b>${h.season}</b> ${t}<small>${h.age}${h.note ? `（${h.note}）` : ''}</small></span>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            })() : ''}
            <div class="cp-actions">
              <button class="cp-btn primary" onclick="zoomToCity('${city.id}'); map.closePopup();">定位城市</button>
              <button class="cp-btn ghost" onclick="shareTeam('${team.name}', '${city.name}')">分享</button>
            </div>
          </div>
        </div>
      `, {
        closeButton: true,
        maxWidth: window.innerWidth <= 480 ? 310 : 340,
        minWidth: 280,
        autoPan: true,
        autoPanPadding: [30, 30],
        autoPanPaddingTopLeft: [10, 60],
        autoPanPaddingBottomRight: [10, 90]
      });

    // 弹窗打开：移动端收起面板/隐藏图例；桌面端启用3D鼠标跟随
    marker.on('popupopen', () => {
      if (window.innerWidth <= 768) {
        document.getElementById('control-panel').classList.add('collapsed');
        const legend = document.getElementById('legend');
        if (legend) legend.style.display = 'none';
      } else {
        const popupEl = marker.getPopup() ? marker.getPopup().getElement() : null;
        const card = popupEl ? popupEl.querySelector('.card-popup') : null;
        if (card && !card._tiltBound) {
          card._tiltBound = true;
          const onMove = (e) => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = 'rotateY(' + (x * 8).toFixed(2) + 'deg) rotateX(' + (-y * 6).toFixed(2) + 'deg)';
          };
          const onLeave = () => { card.style.transform = ''; };
          popupEl.addEventListener('mousemove', onMove);
          popupEl.addEventListener('mouseleave', onLeave);
          card._cleanup = () => {
            popupEl.removeEventListener('mousemove', onMove);
            popupEl.removeEventListener('mouseleave', onLeave);
          };
        }
      }
    });
    marker.on('popupclose', () => {
      if (window.innerWidth <= 768) {
        const legend = document.getElementById('legend');
        if (legend) legend.style.display = '';
      }
    });

    allMarkers[city.id].push(marker);
  });
}

// ========================
// APPLY FILTERS
// ========================
function applyFilters() {
  const visibleCityIds = getVisibleCityIds();

  citiesData.forEach(city => {
    const isVisible = visibleCityIds.includes(city.id);
    renderCity(city, isVisible);
  });

  updateLegend();
}

// ========================
// GET VISIBLE CITY IDS
// ========================
function getVisibleCityIds() {
  let cityIds = citiesData.map(c => c.id);

  if (activeFilters.region !== 'all') {
    cityIds = citiesData.filter(c => c.region === activeFilters.region).map(c => c.id);
  }

  if (!activeFilters.citiesAll) {
    const toggledOff = [];
    document.querySelectorAll('.city-filter-item input[type="checkbox"]').forEach(cb => {
      if (!cb.checked) toggledOff.push(cb.value);
    });
    cityIds = cityIds.filter(id => !toggledOff.includes(id));
  }

  return cityIds;
}

// ========================
// UPDATE LEGEND
// ========================
function updateLegend() {
  const container = document.getElementById('legend-content');
  const visibleIds = getVisibleCityIds();
  const visibleCities = citiesData.filter(c => visibleIds.includes(c.id));
  const visibleTeamCount = visibleCities.reduce((sum, c) => {
    let teams = c.teams;
    if (activeFilters.age !== 'all' && activeFilters.age !== '') {
      teams = teams.filter(t => t.age.includes(activeFilters.age));
    }
    if (activeFilters.search) {
      const s = activeFilters.search.toLowerCase();
      teams = teams.filter(t =>
        t.name.toLowerCase().includes(s) || c.name.toLowerCase().includes(s)
      );
    }
    return sum + teams.length;
  }, 0);

  const sorted = [...visibleCities].sort((a, b) => b.teams.length - a.teams.length);

  container.innerHTML = `
    <div class="legend-stats">
      <div class="legend-stat">
        <div class="legend-stat-num">${visibleCities.length}</div>
        <div class="legend-stat-label">城市</div>
      </div>
      <div class="legend-stat">
        <div class="legend-stat-num">${visibleTeamCount}</div>
        <div class="legend-stat-label">球队</div>
      </div>
    </div>
    <div class="legend-cities">
      ${sorted.slice(0, 8).map(c => `
        <div class="legend-city" onclick="zoomToCity('${c.id}')">
          <span class="city-name">
            <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${c.color};margin-right:6px"></span>
            ${c.name}
          </span>
          <span class="city-count">${c.teams.length}队</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ========================
// MAP INTERACTIONS
// ========================
function zoomToCity(cityId) {
  const city = citiesData.find(c => c.id === cityId);
  if (!city) return;

  map.flyTo(city.center, 10, { duration: 1.2 });

  activeCityId = cityId;
  document.getElementById('backBtn').style.display = 'block';
}

function resetToNational() {
  activeCityId = null;
  document.getElementById('backBtn').style.display = 'none';
  map.flyToBounds(nationalBounds, { padding: [40, 40], maxZoom: 6.5, duration: 1 });
  applyFilters();
}

// Toggle honors dropdown
window.toggleHonors = function(header) {
  const list = header.nextElementSibling;
  const arrow = header.querySelector('.cp-arrow, .honors-arrow');
  if (!list) return;
  list.classList.toggle('collapsed');
  if (arrow) arrow.textContent = list.classList.contains('collapsed') ? '▼' : '▲';
};

// Share function
function shareTeam(teamName, cityName) {
  const text = `${cityName} - ${teamName} 中国青少年美式足球球队`;
  if (navigator.share) {
    navigator.share({ title: '中国青少年美式足球', text: text });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('已复制分享信息：' + text);
    });
  }
}

// ========================
// PANEL TOGGLE
// ========================
const controlPanel = document.getElementById('control-panel');
const panelHeader = document.getElementById('panelHeader');

panelHeader.addEventListener('click', () => {
  controlPanel.classList.toggle('collapsed');
});

// ========================
// FILTER CONTROLS
// ========================

// Region buttons
document.querySelectorAll('.region-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilters.region = btn.dataset.region;
    applyFilters();
  });
});

// Age buttons
document.querySelectorAll('.age-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilters.age = btn.dataset.age;
    applyFilters();
  });
});

// Search input
let searchTimeout;
document.getElementById('searchInput').addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    activeFilters.search = e.target.value.trim();
    applyFilters();
  }, 300);
});

// Show all
document.getElementById('showAllBtn').addEventListener('click', () => {
  activeFilters = { region: 'all', citiesAll: true, age: 'all', search: '' };
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.region-btn[data-region="all"]').classList.add('active');
  document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.age-btn[data-age="all"]').classList.add('active');
  document.querySelectorAll('.city-filter-item input').forEach(cb => cb.checked = true);
  resetToNational();
});

// Reset
document.getElementById('resetBtn').addEventListener('click', () => {
  activeFilters = { region: 'all', citiesAll: true, age: 'all', search: '' };
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.region-btn[data-region="all"]').classList.add('active');
  document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.age-btn[data-age="all"]').classList.add('active');
  document.querySelectorAll('.city-filter-item input').forEach(cb => cb.checked = true);
  applyFilters();
});

// Back button
document.getElementById('backBtn').addEventListener('click', resetToNational);

// ========================
// INIT CITY FILTERS
// ========================
function initCityFilters() {
  const container = document.getElementById('city-filters');
  container.innerHTML = citiesData.map(city => `
    <label class="city-filter-item">
      <input type="checkbox" value="${city.id}" checked>
      <span class="color-dot" style="background:${city.color}"></span>
      ${city.name} (${city.teams.length})
    </label>
  `).join('');

  container.querySelectorAll('input').forEach(cb => {
    cb.addEventListener('change', () => {
      activeFilters.citiesAll = false;
      applyFilters();
    });
  });
}

// ========================
// INIT
// ========================
function init() {
  // 创建城市中心专用 pane（z-index 高于所有球队标记 markerPane=600，确保城市点可见）
  map.createPane('cityCenterPane');
  map.getPane('cityCenterPane').style.zIndex = 650;

  initCityFilters();
  applyFilters();

  // 初始视野：fitBounds 框住全部城市，四周无大片空白
  map.fitBounds(nationalBounds, { padding: [40, 40], maxZoom: 6.5 });

  // 城市名只在放大到 zoom>=6 时显示（低缩放避免珠三角等地名重叠）
  const updateCityNames = () => {
    const show = map.getZoom() >= 6;
    document.querySelectorAll('.city-center-name').forEach(el => {
      el.style.display = show ? '' : 'none';
    });
  };
  updateCityNames();
  map.on('zoomend', updateCityNames);

  // Hide loading
  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
    setTimeout(() => {
      const el = document.getElementById('loading');
      if (el) el.style.display = 'none';
    }, 500);
  }, 600);

  // Close popups on map click
  map.on('click', () => {
    map.closePopup();
  });

  // Resize handler
  window.addEventListener('resize', () => {
    updateLegend();
  });
}

document.addEventListener('DOMContentLoaded', init);

// ========================
// GUESTBOOK (留言板)
// ========================
const GB_STORAGE_KEY = 'fbmap_guestbook_v1';

function loadGuestbook() {
  try {
    return JSON.parse(localStorage.getItem(GB_STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveGuestbook(list) {
  try {
    localStorage.setItem(GB_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    // localStorage 不可用（隐私模式等），静默失败
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function renderGuestbook() {
  const container = document.getElementById('guestbook-list');
  if (!container) return;
  const list = loadGuestbook();
  if (list.length === 0) {
    container.innerHTML = '<div class="gb-empty">还没有留言，来抢沙发！🏈</div>';
    return;
  }
  container.innerHTML = list.slice().reverse().map(m => `
    <div class="gb-item">
      <div class="gb-item-head">
        <span class="gb-name">${escapeHtml(m.name || '匿名')}</span>
        <span class="gb-time">${escapeHtml(m.time || '')}</span>
      </div>
      <div class="gb-text">${escapeHtml(m.text)}</div>
    </div>
  `).join('');
}

function openGuestbook() {
  const overlay = document.getElementById('guestbook');
  if (!overlay) return;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  renderGuestbook();
  setTimeout(() => {
    const text = document.getElementById('guestbookText');
    if (text && window.innerWidth > 768) text.focus();
  }, 350);
}

function closeGuestbook() {
  const overlay = document.getElementById('guestbook');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}

function submitGuestbook() {
  const nameInput = document.getElementById('guestbookName');
  const textInput = document.getElementById('guestbookText');
  const text = (textInput.value || '').trim();
  if (!text) {
    alert('请输入留言内容');
    return;
  }
  const list = loadGuestbook();
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  list.push({
    name: (nameInput.value || '').trim() || '匿名',
    text: text,
    time: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`
  });
  // 最多保留 200 条
  if (list.length > 200) list.splice(0, list.length - 200);
  saveGuestbook(list);
  textInput.value = '';
  renderGuestbook();
}

// 留言板事件绑定
function initGuestbook() {
  const btn = document.getElementById('guestbookBtn');
  const close = document.getElementById('guestbookClose');
  const submit = document.getElementById('guestbookSubmit');
  const overlay = document.getElementById('guestbook');

  if (btn) btn.addEventListener('click', openGuestbook);
  if (close) close.addEventListener('click', closeGuestbook);
  if (submit) submit.addEventListener('click', submitGuestbook);

  // 点击遮罩关闭
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeGuestbook();
    });
  }

  // ESC 关闭
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeGuestbook();
  });
}

document.addEventListener('DOMContentLoaded', initGuestbook);

// Console info
console.log('中国青少年美式装备橄榄球地图图鉴');
console.log(`  ${totalCities} 个城市 · ${totalTeams} 支球队`);
console.log('  数据来源：各地俱乐部公开信息');
// ========================
// CYFL 2026-2027 赛程 + 积分榜 (v3 全屏)
// ========================
const SCHEDULE_DATA = {"_note":"2026-09-04 按 S9-S13 赛程大图校正南京/苏州/北京/上海/深圳五站；上海鹰(绿)标准化为上海鹰绿；S3青岛U13补佛山小兕虎vs北京维肯","stations":[{"id":"S1","city":"杭州","date":"2026.10.3-10.4"},{"id":"S2","city":"上海","date":"10.24-10.25"},{"id":"S3","city":"青岛","date":"10.31-11.01"},{"id":"S4","city":"上海","date":"11.21-11.22"},{"id":"S5","city":"武汉","date":"12.05-12.06"},{"id":"S6","city":"广州","date":"12.19-12.20"},{"id":"S7","city":"佛山","date":"2027.3.6-3.7"},{"id":"S8","city":"上海","date":"3.13-3.14"},{"id":"S9","city":"南京","date":"3.20-3.21"},{"id":"S10","city":"苏州","date":"4.03-4.04"},{"id":"S11","city":"北京","date":"4.24-4.25"},{"id":"S12","city":"上海","date":"5.01-5.02"},{"id":"S13","city":"深圳","date":"5.03-5.04"}],"teams":{"U9":["U9成都太阳鸟","U9佛山小兕虎","U9上海鳄鱼","U9上海烽火狼","U9上海飓风角斗士","U9上海银河","U9上海鹰绿","U9上海鹰坦克联队","U9上海AFA鲨鱼","U9苏州蓝骑士"],"U11":["U11北京黑曼巴","U11佛山小兕虎","U11广州白鳍豚","U11广州骑士","U11南京雄狮","U11青岛虎鲸","U11上海鳄鱼","U11上海烽火狼","U11上海飓风角斗士","U11上海银河","U11上海鹰绿","U11上海鹰坦克联队","U11上海AFA鲨鱼","U11苏州蓝骑士","U11武汉猎豹"],"U13":["U13北京黑曼巴","U13北京维肯","U13佛山小兕虎","U13广州白鳍豚","U13广州骑士","U13杭州猛虎","U13南京征服者","U13青岛虎鲸","U13上海烽火狼","U13上海飓风角斗士","U13上海银河","U13上海鹰白","U13上海鹰蓝","U13上海鹰绿","U13上海AFA鲨鱼","U13深圳鲲鹏","U13深圳热浪","U13武汉雪豹","U13武汉黑豹"],"U15":["U15北京黑曼巴","U15北京维肯","U15佛山小兕虎","U15广州骑士","U15杭州猛虎","U15上海烽火狼","U15上海裂袭者","U15上海银河","U15上海鹰"]},"joined_teams":["上海裂袭者","上海鹰坦克联队"],"schedule":{"U15":{"S1":[["上海烽火狼","北京黑曼巴"],["杭州猛虎","广州骑士"],["上海银河","上海裂袭者"],["北京黑曼巴","杭州猛虎"],["广州骑士","上海银河"],["上海裂袭者","上海烽火狼"]],"S2":[],"S3":[["佛山小兕虎","北京黑曼巴"],["北京维肯","杭州猛虎"],["北京黑曼巴","北京维肯"],["杭州猛虎","佛山小兕虎"]],"S4":[["上海烽火狼","上海银河"],["上海裂袭者","上海鹰"],["上海银河","上海裂袭者"],["上海鹰","上海烽火狼"]],"S5":[],"S6":[["上海鹰","北京维肯"],["佛山小兕虎","广州骑士"],["北京维肯","佛山小兕虎"],["广州骑士","上海鹰"]],"S7":[["上海烽火狼","佛山小兕虎"],["北京黑曼巴","广州骑士"],["佛山小兕虎","北京黑曼巴"],["广州骑士","上海烽火狼"]],"S8":[["上海裂袭者","上海鹰"],["上海银河","杭州猛虎"],["上海鹰","上海银河"],["杭州猛虎","上海裂袭者"]],"S9":[],"S10":[["上海鹰","佛山小兕虎"],["上海裂袭者","北京维肯"],["上海烽火狼","杭州猛虎"],["佛山小兕虎","上海裂袭者"],["北京维肯","上海烽火狼"],["杭州猛虎","上海鹰"]],"S11":[["上海银河","北京维肯"],["广州骑士","北京黑曼巴"],["北京维肯","广州骑士"],["北京黑曼巴","上海银河"]],"S12":[],"S13":[]},"U13":{"S1":[["上海银河","北京黑曼巴"],["广州骑士","杭州猛虎"],["上海银河","杭州猛虎"],["北京黑曼巴","广州骑士"]],"S2":[["上海AFA鲨鱼","上海烽火狼"],["上海飓风角斗士","上海鹰白"],["上海鹰绿","南京征服者"],["上海鹰蓝","广州白鳍豚"],["上海AFA鲨鱼","上海鹰蓝"],["上海烽火狼","上海飓风角斗士"],["上海鹰白","南京征服者"],["上海鹰绿","广州白鳍豚"]],"S3":[["杭州猛虎","武汉雪豹"],["武汉黑豹","深圳热浪"],["深圳鲲鹏","青岛虎鲸"],["佛山小兕虎","青岛虎鲸"],["北京维肯","杭州猛虎"],["佛山小兕虎","北京维肯"],["武汉雪豹","深圳热浪"],["武汉黑豹","深圳鲲鹏"]],"S4":[["上海烽火狼","南京征服者"],["上海AFA鲨鱼","南京征服者"],["上海烽火狼","上海银河"],["上海银河","上海AFA鲨鱼"]],"S5":[["上海飓风角斗士","上海鹰蓝"],["北京黑曼巴","武汉雪豹"],["武汉黑豹","青岛虎鲸"],["上海飓风角斗士","武汉黑豹"],["上海鹰蓝","北京黑曼巴"],["武汉雪豹","青岛虎鲸"]],"S6":[["上海鹰白","深圳热浪"],["上海鹰绿","深圳鲲鹏"],["佛山小兕虎","广州白鳍豚"],["北京维肯","广州骑士"],["上海鹰白","深圳鲲鹏"],["上海鹰绿","佛山小兕虎"],["北京维肯","广州白鳍豚"],["广州骑士","深圳热浪"]],"S7":[["上海烽火狼","北京黑曼巴"],["佛山小兕虎","广州骑士"],["上海烽火狼","广州骑士"],["佛山小兕虎","北京黑曼巴"]],"S8":[["上海AFA鲨鱼","上海飓风角斗士"],["上海鹰白","青岛虎鲸"],["上海鹰绿","杭州猛虎"],["上海鹰蓝","深圳鲲鹏"],["上海AFA鲨鱼","深圳鲲鹏"],["上海飓风角斗士","上海鹰绿"],["上海鹰白","杭州猛虎"],["上海鹰蓝","青岛虎鲸"]],"S9":[["上海银河","武汉黑豹"],["南京征服者","武汉雪豹"],["广州白鳍豚","深圳热浪"],["上海银河","深圳热浪"],["南京征服者","武汉黑豹"],["广州白鳍豚","武汉雪豹"]],"S10":[["上海AFA鲨鱼","上海鹰白"],["上海烽火狼","上海鹰蓝"],["上海飓风角斗士","杭州猛虎"],["上海鹰绿","北京维肯"],["上海AFA鲨鱼","上海鹰绿"],["上海烽火狼","上海鹰白"],["上海飓风角斗士","北京维肯"],["上海鹰蓝","杭州猛虎"]],"S11":[["上海银河","武汉雪豹"],["北京维肯","武汉黑豹"],["北京黑曼巴","青岛虎鲸"],["上海银河","青岛虎鲸"],["北京维肯","武汉雪豹"],["北京黑曼巴","武汉黑豹"]],"S12":[],"S13":[["佛山小兕虎","南京征服者"],["广州白鳍豚","广州骑士"],["深圳热浪","深圳鲲鹏"],["佛山小兕虎","深圳热浪"],["南京征服者","广州白鳍豚"],["广州骑士","深圳鲲鹏"]]},"U11":{"S1":[["上海烽火狼","广州骑士"],["佛山小兕虎","上海银河"],["上海烽火狼","上海银河"],["佛山小兕虎","广州骑士"]],"S2":[["上海AFA鲨鱼","广州白鳍豚"],["上海鹰绿","苏州蓝骑士"],["上海鹰坦克联队","上海飓风角斗士"],["上海AFA鲨鱼","上海飓风角斗士"],["上海鹰绿","上海鹰坦克联队"],["广州白鳍豚","苏州蓝骑士"]],"S3":[["青岛虎鲸","武汉猎豹"],["上海鳄鱼","青岛虎鲸"],["北京黑曼巴","武汉猎豹"]],"S4":[["上海AFA鲨鱼","南京雄狮"],["上海鳄鱼","上海银河"],["上海烽火狼","苏州蓝骑士"],["上海AFA鲨鱼","上海银河"],["上海鳄鱼","上海烽火狼"],["南京雄狮","苏州蓝骑士"]],"S5":[["上海鹰绿","北京黑曼巴"],["上海飓风角斗士","武汉猎豹"],["南京雄狮","青岛虎鲸"],["上海鹰绿","武汉猎豹"],["北京黑曼巴","南京雄狮"],["上海飓风角斗士","青岛虎鲸"]],"S6":[["上海鹰坦克联队","佛山小兕虎"],["广州白鳍豚","广州骑士"],["上海鹰坦克联队","广州骑士"],["佛山小兕虎","广州白鳍豚"]],"S7":[["佛山小兕虎","北京黑曼巴"],["广州骑士","苏州蓝骑士"],["佛山小兕虎","苏州蓝骑士"],["广州骑士","北京黑曼巴"]],"S8":[["上海AFA鲨鱼","上海鹰坦克联队"],["上海鹰绿","青岛虎鲸"],["上海鳄鱼","上海飓风角斗士"],["上海AFA鲨鱼","上海鳄鱼"],["上海鹰绿","上海飓风角斗士"],["上海鹰坦克联队","青岛虎鲸"]],"S9":[["广州白鳍豚","武汉猎豹"],["南京雄狮","上海银河"],["广州白鳍豚","上海银河"],["南京雄狮","武汉猎豹"]],"S10":[["上海AFA鲨鱼","上海烽火狼"],["上海飓风角斗士","苏州蓝骑士"],["上海AFA鲨鱼","苏州蓝骑士"],["上海烽火狼","上海飓风角斗士"]],"S11":[["北京黑曼巴","上海银河"],["青岛虎鲸","武汉猎豹"],["北京黑曼巴","青岛虎鲸"],["武汉猎豹","上海银河"]],"S12":[["上海鹰绿","南京雄狮"],["上海鹰坦克联队","上海鳄鱼"],["上海鹰绿","上海鳄鱼"],["上海鹰坦克联队","南京雄狮"]],"S13":[["上海烽火狼","广州白鳍豚"],["佛山小兕虎","广州骑士"],["上海烽火狼","佛山小兕虎"],["广州白鳍豚","广州骑士"]]},"U9":{"S1":[["上海银河","上海鳄鱼"],["上海鹰绿","佛山小兕虎"],["上海银河","佛山小兕虎"],["上海鳄鱼","上海鹰绿"]],"S2":[["上海AFA鲨鱼","上海烽火狼"],["上海飓风角斗士","苏州蓝骑士"],["上海鹰坦克联队","成都太阳鸟"],["上海AFA鲨鱼","成都太阳鸟"],["上海烽火狼","上海飓风角斗士"],["上海鹰坦克联队","苏州蓝骑士"]],"S3":[],"S4":[["上海AFA鲨鱼","上海银河"],["上海飓风角斗士","上海鹰绿"],["上海鳄鱼","苏州蓝骑士"],["上海AFA鲨鱼","上海鳄鱼"],["上海银河","上海飓风角斗士"],["上海鹰绿","苏州蓝骑士"]],"S5":[],"S6":[["上海烽火狼","上海鹰坦克联队"],["佛山小兕虎","成都太阳鸟"],["上海烽火狼","成都太阳鸟"],["上海鹰坦克联队","佛山小兕虎"]],"S7":[["上海鳄鱼","佛山小兕虎"],["成都太阳鸟","苏州蓝骑士"],["上海鳄鱼","成都太阳鸟"],["佛山小兕虎","苏州蓝骑士"]],"S8":[["上海AFA鲨鱼","上海飓风角斗士"],["上海烽火狼","上海鹰绿"],["上海银河","上海鹰坦克联队"],["上海AFA鲨鱼","上海鹰绿"],["上海烽火狼","上海银河"],["上海飓风角斗士","上海鹰坦克联队"]],"S9":[],"S10":[["上海AFA鲨鱼","佛山小兕虎"],["上海烽火狼","苏州蓝骑士"],["上海AFA鲨鱼","苏州蓝骑士"],["上海烽火狼","佛山小兕虎"]],"S11":[],"S12":[["上海银河","上海鹰绿"],["上海飓风角斗士","成都太阳鸟"],["上海鳄鱼","上海鹰坦克联队"],["上海银河","成都太阳鸟"],["上海飓风角斗士","上海鳄鱼"],["上海鹰坦克联队","上海鹰绿"]],"S13":[]}}};
const TEAM_TO_CITY = {
  '广州骑士':'guangzhou','广州白鳍豚':'guangzhou','广州黑骑士':'guangzhou',
  '佛山小兕虎':'foshan','深圳鲲鹏':'shenzhen','深圳热浪':'shenzhen','珠海海东青':'zhuhai',
  '上海烽火狼':'shanghai','上海鹰':'shanghai','上海鹰白':'shanghai','上海鹰蓝':'shanghai','上海鹰绿':'shanghai',
  '上海鹰坦克联队':'shanghai','上海裂袭者':'shanghai','上海蓝魔':'shanghai','上海飓风角斗士':'shanghai',
  '上海AFA鲨鱼':'shanghai','上海鳄鱼':'shanghai','上海银河':'shanghai','上海坚毅坦克':'shanghai',
  '上海幽灵虎':'shanghai','上海Chang飓风':'shanghai',
  '南京征服者':'nanjing','南京雄狮':'nanjing','苏州蓝骑士':'suzhou',
  '杭州将军':'hangzhou','杭州猛虎':'hangzhou','杭州四叶草':'hangzhou','温州赤鹿青训':'wenzhou',
  '西安传奇':'xian',
  '成都川渝幼狮联队':'chengdu','成都太阳鸟':'chengdu','成都红潮':'chengdu','成都飞虎':'chengdu',
  '武汉change巴萨卡':'wuhan','武汉change眼镜蛇':'wuhan','武汉赤焰':'wuhan','武汉猎豹':'wuhan',
  '武汉雪豹':'wuhan','武汉黑豹':'wuhan',
  '北京维肯':'beijing','北京黑曼巴':'beijing','北京雄狮':'beijing',
  '青岛虎鲸':'qingdao','济南眼镜蛇':'jinan','东营火凤凰':'dongying'
};
const CITY_COORDS = {
  guangzhou:[23.1291,113.2644],shenzhen:[22.5429,114.0596],foshan:[23.0215,113.1214],zhuhai:[22.2707,113.5767],
  shanghai:[31.2304,121.4737],suzhou:[31.2989,120.5853],nanjing:[32.0603,118.7969],hangzhou:[30.2741,120.1551],
  wenzhou:[27.9939,120.6993],xian:[34.3416,108.9398],chengdu:[30.5728,104.0668],wuhan:[30.5928,114.3055],
  beijing:[39.9042,116.4074],qingdao:[36.0671,120.3826],jinan:[36.6512,117.1201],dongying:[37.4346,118.6747]
};

let schedAge = 'U15';
let schedTab = 'schedule';
let schedTeam = null;
const JOINED = new Set(SCHEDULE_DATA.joined_teams);
const TEAM_CITY_RAW = {
  '上海鹰白':'上海鹰','上海鹰蓝':'上海鹰','上海鹰绿':'上海鹰',
  '武汉雪豹':'武汉猎豹','武汉黑豹':'武汉猎豹'
};
function cityOfTeam(n){ const c=TEAM_CITY_RAW[n]||n; return TEAM_TO_CITY[c]||null; }
function cityLabel(n){
  for(const k of ['上海','广州','深圳','佛山','珠海','南京','苏州','杭州','温州','西安','成都','武汉','北京','青岛','济南','东营']){
    if(n.indexOf(k)===0) return k; }
  return '';
}
function jumpToMap(n){
  const cid=cityOfTeam(n);
  if(!cid) return;
  closeScheduleView();
  const c=CITY_COORDS[cid];
  if(c&&window._map) window._map.flyTo(c,12,{duration:1.1});
}
function openScheduleView(){ const v=document.getElementById('scheduleView'); if(v)v.classList.add('open'); document.body.style.overflow='hidden'; schedTeam=null; renderSched(); }
function closeScheduleView(){ const v=document.getElementById('scheduleView'); if(v)v.classList.remove('open'); document.body.style.overflow=''; }
function setSchedTab(t){ schedTab=t; schedTeam=null; document.querySelectorAll('.sch-viewtab').forEach(b=>b.classList.toggle('active',b.dataset.tab===t)); renderSched(); }
function setSchedAge(a){ schedAge=a; schedTeam=null; document.querySelectorAll('.sch-age').forEach(b=>b.classList.toggle('active',b.dataset.age===a)); renderSched(); }
function clearSchedTeam(){ schedTeam=null; renderSched(); }
function renderSched(){
  const body=document.getElementById('schBody'); if(!body) return;
  body.innerHTML = schedTab==='standings' ? schedStandingsHTML() : (schedTeam ? schedTeamHTML(schedTeam) : schedAllHTML());
  bindSchedEvents(body);
}
function bindSchedEvents(body){
  body.querySelectorAll('.sch-tm[data-team]').forEach(el=>{
    el.addEventListener('click',e=>{
      e.stopPropagation();
      const t=el.dataset.team;
      if(JOINED.has(t)){ jumpToMap(t); return; }
      schedTeam=t; schedTab='schedule';
      document.querySelectorAll('.sch-viewtab').forEach(b=>b.classList.toggle('active',b.dataset.tab==='schedule'));
      renderSched();
    });
  });
  body.querySelectorAll('.sch-goto[data-team]').forEach(el=>{
    el.addEventListener('click',e=>{ e.stopPropagation(); jumpToMap(el.dataset.team); });
  });
}
function scoreCell(){ return '<span class="sch-score">— : —</span>'; }
function tmSpan(t,side){ const j=JOINED.has(t); const sc=side?(' tm-'+side):''; return '<span class="sch-tm'+(j?' joined':'')+sc+'" data-team="'+t+'">'+t+'</span>'; }
function matchRow(a,b){ return '<div class="sch-match">'+tmSpan(a,'left')+scoreCell()+tmSpan(b,'right')+'</div>'; }
function schedAllHTML(){
  const M=SCHEDULE_DATA.schedule[schedAge]||{}, st=SCHEDULE_DATA.stations;
  const teamCnt=(SCHEDULE_DATA.teams[schedAge]||[]).length;
  let all=0; st.forEach(s=>all+=(M[s.id]||[]).length);
  let h='<div class="sch-inner"><div class="sch-meta-line">'+schedAge+' 装备组 · '+st.length+' 站 · <b>'+teamCnt+'</b> 队 · 共 <b>'+all+'</b> 场 · 点球队名查看该队全部赛程，比分栏待赛果录入</div><div class="sch-grid">';
  for(const s of st){
    const arr=M[s.id]||[];
    h+='<div class="sch-card"><div class="sch-card-head"><div class="sch-stn-badge">'+s.id+'</div><div><div class="sch-card-city">'+s.city+'</div><div class="sch-card-date">'+s.date+'</div></div><span class="sch-card-count">'+(arr.length?arr.length+' 场':'休赛')+'</span></div><div class="sch-matches">';
    if(!arr.length){ h+='<div class="sch-empty-line">该年龄组本站无赛事</div>'; }
    else{ arr.forEach(m=>{ h+=matchRow(m[0],m[1]); }); }
    h+='</div></div>';
  }
  h+='</div><div class="sch-joined-note"><b>联队：</b>上海裂袭者 = 上海猛犸鳄鱼 × 上海AFA鲨鱼；上海鹰坦克联队 = 上海鹰 × 上海坚毅坦克，联队点击定位城市。<br><b>分队：</b>上海鹰白/蓝/绿、U13 武汉雪豹/武汉黑豹（武汉猎豹两分队）为独立参赛队，点击定位武汉猎豹。</div></div>';
  return h;
}
function schedTeamHTML(name){
  const M=SCHEDULE_DATA.schedule[schedAge]||{}, st=SCHEDULE_DATA.stations;
  const list=[];
  st.forEach(s=>{ (M[s.id]||[]).forEach(m=>{ if(m[0]===name)list.push({s:s,o:m[1],home:true}); else if(m[1]===name)list.push({s:s,o:m[0],home:false}); }); });
  let h='<div class="sch-inner"><div class="sch-teambar"><button class="sch-back2" onclick="clearSchedTeam()">← 全部赛程</button><span class="sch-teambar-n"><span class="sch-logo-dot">'+name[0]+'</span><b>'+name+'</b><span class="sch-teambar-age">'+schedAge+'</span></span>';
  if(cityOfTeam(name)) h+='<button class="sch-goto" data-team="'+name+'">📍 查看 '+cityLabel(name)+' 球队</button>';
  h+='</div><div class="sch-meta-line">'+name+' 在 '+schedAge+' 组共 <b>'+list.length+'</b> 场比赛，点比分框位置可录入比分</div><div class="sch-team-list">';
  if(!list.length) h+='<div class="sch-empty-line">该队暂无已记录赛程</div>';
  list.forEach(it=>{
    h+='<div class="sch-team-game"><div class="sch-game-stn"><span class="sch-gbadge">'+it.s.id+'</span><div><div>'+it.s.city+'</div><div class="sch-gdate">'+it.s.date+'</div></div></div><div class="sch-game-body">'+tmSpan(it.home?name:it.o,'left')+scoreCell()+tmSpan(it.home?it.o:name,'right')+'</div></div>';
  });
  h+='</div><div class="sch-note-line">比分栏为预留位置，赛果录入后自动汇总到积分榜。</div></div>';
  return h;
}
function schedStandingsHTML(){
  const teams=SCHEDULE_DATA.teams[schedAge]||[];
  let h='<div class="sch-inner"><div class="sch-meta-line">'+schedAge+' 装备组积分榜 · '+teams.length+' 队 · 点球队查看全部赛程（胜 2 / 平 1 / 负 0）</div><div class="sch-table-wrap"><table class="sch-table"><thead><tr><th>#</th><th>球队</th><th>场次</th><th>胜</th><th>平</th><th>负</th><th>得分</th><th>失分</th><th>净胜分</th><th>积分</th></tr></thead><tbody>';
  teams.forEach((t,i)=>{
    const nm=t.replace(/^U\d+/,'');
    const rk=i===0?'sch-rk sch-rk1':i===1?'sch-rk sch-rk2':i===2?'sch-rk sch-rk3':'sch-rk';
    const isJ=JOINED.has(nm);
    h+='<tr><td class="'+rk+'">'+(i+1)+'</td><td class="sch-team-cell"><span class="sch-logo-dot">'+(nm[0]||'队')+'</span>'+tmSpan(nm)+'</td><td class="sch-num">0</td><td class="sch-num">0</td><td class="sch-num">0</td><td class="sch-num">0</td><td class="sch-num">0</td><td class="sch-num">0</td><td class="sch-num">0</td><td class="sch-pts">0</td></tr>';
  });
  h+='</tbody></table></div><div class="sch-note-line">积分规则：胜 2 分 · 平 1 分 · 负 0 分，赛果录入后自动排序。点球队名查看该队全部赛程。</div></div>';
  return h;
}
document.addEventListener('DOMContentLoaded', () => {
  const b=document.getElementById('cyflBanner'); if(b)b.addEventListener('click',openScheduleView);
  const bk=document.getElementById('schBack'); if(bk)bk.addEventListener('click',closeScheduleView);
  document.querySelectorAll('.sch-viewtab').forEach(x=>x.addEventListener('click',()=>setSchedTab(x.dataset.tab)));
  document.querySelectorAll('.sch-age').forEach(x=>x.addEventListener('click',()=>setSchedAge(x.dataset.age)));
  document.addEventListener('keydown',e=>{ if(e.key==='Escape')closeScheduleView(); });
});
