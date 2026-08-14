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
  "广州八爪鱼": "logos/guangzhou-octopus.png",
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
          { season: "2023秋季", age: "U15", title: "Y-League 冠军", note: "" }
        ]
      },
      { name: "广州白鳍豚", age: "U13", founded: "待确认", coach: "待确认", league: "CYFL" },
      { name: "广州八爪鱼", age: "U10", founded: "待确认", coach: "待确认" }
    ]
  },
  {
    id: "shenzhen", name: "深圳",
    center: [22.5431, 114.0579], color: "#10b981", region: "华南",
    teams: [
      { name: "深圳鲲鹏", age: "U13", founded: "待确认", coach: "待确认", league: "CYFL" },
      { name: "深圳热浪", age: "U13", founded: "待确认", coach: "待确认", league: "CYFL" },
      { name: "深圳火箭熊", age: "U10", founded: "待确认", coach: "待确认" }
    ]
  },
  {
    id: "foshan", name: "佛山",
    center: [23.0215, 113.1214], color: "#8b5cf6", region: "华南",
    teams: [
      { name: "佛山小兕虎", age: "U9 / U11 / U13 / U15", founded: "待确认", coach: "康师傅，肥鸡", league: "CYFL",
        honors: [
          { season: "2024-25", age: "U13", title: "Y-League 冠军", note: "" }
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
          { season: "2024-25", age: "U11", title: "Y-League 冠军", note: "" },
          { season: "2024-25", age: "U14", title: "Y-League 冠军", note: "" },
          { season: "2025-26", age: "U9", title: "Y-League 冠军", note: "" },
          { season: "2025-26", age: "U13", title: "Y-League 冠军", note: "" }
        ]
      },
      { name: "上海蓝魔", age: "U11 / U13", founded: "待确认", coach: "待确认" },
      { name: "上海Chang飓风", age: "U11", founded: "待确认", coach: "待确认" },
      { name: "上海鳄鱼", age: "U9 / U11 / U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2023春季", age: "U11", title: "Y-League 冠军", note: "" },
          { season: "2023秋季", age: "U11", title: "Y-League 冠军", note: "" },
          { season: "2024春季", age: "U11", title: "Y-League 冠军", note: "" },
          { season: "2026春季", age: "U9", title: "DYFL 冠军", note: "" },
          { season: "2026春季", age: "U13", title: "DYFL 季军", note: "" }
        ]
      },
      { name: "上海银河", age: "U9 / U11 / U13 / U15", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2021秋季", age: "U11", title: "Y-League 冠军", note: "" },
          { season: "2021秋季", age: "U13", title: "Y-League 冠军", note: "" },
          { season: "2023春季", age: "U13", title: "Y-League 冠军", note: "" },
          { season: "2024春季", age: "U13", title: "Y-League 冠军", note: "" },
          { season: "2026春季", age: "U9", title: "DYFL 季军", note: "" },
          { season: "2026春季", age: "U11", title: "DYFL 冠军", note: "" },
          { season: "2026春季", age: "U13", title: "DYFL 冠军", note: "" }
        ]
      },
      { name: "上海坚毅坦克", age: "U9 / U11", founded: "待确认", coach: "待确认", league: "CYFL",
        honors: [
          { season: "2022秋季", age: "U9", title: "Y-League 冠军", note: "" },
          { season: "2022秋季", age: "U11", title: "Y-League 冠军", note: "" }
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
      { name: "成都太阳鸟", age: "待确认", founded: "待确认", coach: "待确认" },
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
          { season: "2023春季", age: "U9", title: "Y-League 冠军", note: "武汉战隼" }
        ]
      },
      { name: "武汉change眼镜蛇", age: "U11", founded: "待确认", coach: "待确认",
        honors: [
          { season: "2024-25", age: "U9", title: "Y-League 冠军", note: "" },
          { season: "2025-26", age: "U11", title: "Y-League 冠军", note: "" }
        ]
      },
      { name: "武汉赤焰", age: "待确认", founded: "待确认", coach: "待确认" },
      { name: "武汉猎豹", age: "U11 / U13", founded: "待确认", coach: "待确认", league: "CYFL" }
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
}).setView([35.8, 104.1], 4);

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
  const baseRadius = 0.08 + teamCount * 0.006;
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

  // 绘制连接线 (only if >1 team)
  if (filteredTeams.length > 1) {
    teamPositions.forEach(position => {
      const connector = L.polyline([city.center, position], {
        className: 'city-connector',
        color: city.color,
        weight: 1.5,
        opacity: 0.4,
        smoothFactor: 1
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
        <div class="popup-card">
          <div class="popup-header">
            <img src="${logoUrl}" alt="${team.name} Logo" class="popup-logo" onerror="this.src='${placeholderSVG}'">
            <h3>${team.name}</h3>
          </div>
          <div class="popup-body">
            <p><strong>城市：</strong><span class="city">${city.name}</span></p>
            <p><strong>地区：</strong>${city.region}</p>
            <p><strong>梯队：</strong><span class="age-group">${team.age}</span></p>
            ${team.league ? `<p><strong>所属联盟：</strong><span class="league-badge">${team.league}</span></p>` : ''}
            <p><strong>项目：</strong>美式足球（装备）</p>
            <p><strong>成立：</strong>${team.founded}</p>
            <p><strong>教练：</strong>${team.coach}</p>
            ${team.honors && team.honors.length > 0 ? (() => {
              const grouped = team.honors.reduce((acc, h) => {
                if (!acc[h.season]) acc[h.season] = [];
                acc[h.season].push(h);
                return acc;
              }, {});
              return `
                <div class="popup-honors">
                  <div class="honors-header" onclick="window.toggleHonors(this)">
                    <span class="honors-title">🏆 荣誉 (${team.honors.length})</span>
                    <span class="honors-arrow">▼</span>
                  </div>
                  <div class="honors-list collapsed">
                    ${Object.entries(grouped).map(([season, honors]) => {
                      const byTitle = honors.reduce((acc, h) => {
                        const t = h.title || '冠军';
                        if (!acc[t]) acc[t] = [];
                        acc[t].push(h);
                        return acc;
                      }, {});
                      return Object.entries(byTitle).map(([title, list]) => `
                        <div class="honor-item">
                          <span class="honor-season">${season}</span>
                          <span class="honor-title-chip">${title}</span>
                          <span class="honor-detail">${list.map(h => `<span class="honor-age-chip">${h.age}${h.note ? `<em class="honor-note-inline">（${h.note}）</em>` : ''}</span>`).join('')}</span>
                        </div>
                      `).join('');
                    }).join('')}
                  </div>
                </div>
              `;
            })() : ''}
          </div>
          <div class="popup-actions">
            <button class="popup-btn" onclick="zoomToCity('${city.id}'); map.closePopup();">
              定位城市
            </button>
            <button class="popup-btn secondary" onclick="shareTeam('${team.name}', '${city.name}')">
              分享
            </button>
          </div>
          <div class="popup-footer">
            <em>点击地图其他区域关闭弹窗</em>
          </div>
        </div>
      `, {
        closeButton: true,
        maxWidth: window.innerWidth <= 480 ? 300 : 350,
        minWidth: 280,
        autoPan: true,
        autoPanPadding: [30, 30],
        autoPanPaddingTopLeft: [10, 60],
        autoPanPaddingBottomRight: [10, 90]
      });

    // 移动端：弹窗打开时自动收起控制面板、隐藏图例，避免遮挡弹窗
    marker.on('popupopen', () => {
      if (window.innerWidth <= 768) {
        document.getElementById('control-panel').classList.add('collapsed');
        const legend = document.getElementById('legend');
        if (legend) legend.style.display = 'none';
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
  map.flyTo([35.8, 104.1], 4, { duration: 1 });
  applyFilters();
}

// Toggle honors dropdown
window.toggleHonors = function(header) {
  const list = header.nextElementSibling;
  const arrow = header.querySelector('.honors-arrow');
  list.classList.toggle('collapsed');
  arrow.textContent = list.classList.contains('collapsed') ? '▼' : '▲';
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
  initCityFilters();
  applyFilters();

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
