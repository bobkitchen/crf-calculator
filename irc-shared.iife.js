var IRCShared = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.js
  var src_exports = {};
  __export(src_exports, {
    BASE_URL: () => BASE_URL,
    COUNTRIES: () => COUNTRIES,
    HEADERS: () => HEADERS,
    IRC_LOGO_DATA_URI: () => IRC_LOGO_DATA_URI,
    METRIC_CONFIGS: () => METRIC_CONFIGS,
    STANCE_MATRIX: () => STANCE_MATRIX,
    STORAGE_KEYS: () => STORAGE_KEYS,
    SUPABASE_KEY: () => SUPABASE_KEY,
    SUPABASE_URL: () => SUPABASE_URL,
    TABLE: () => TABLE,
    THRESHOLDS: () => THRESHOLDS,
    TO_CAMEL: () => TO_CAMEL,
    TO_SNAKE: () => TO_SNAKE,
    calculateOverallStance: () => calculateOverallStance,
    calculateSeverity: () => calculateSeverity,
    daysUntilExpiration: () => daysUntilExpiration,
    fetchAll: () => fetchAll,
    fetchClassifications: () => fetchClassifications,
    findCountry: () => findCountry,
    formatDate: () => formatDate,
    formatNum: () => formatNum,
    getSiteConfig: () => getSiteConfig,
    initSiteSwitcher: () => initSiteSwitcher,
    isExpired: () => isExpired,
    lookupStance: () => lookupStance,
    mapToCamel: () => mapToCamel,
    mapToSnake: () => mapToSnake,
    renderFooter: () => renderFooter,
    renderHeader: () => renderHeader,
    uuid: () => uuid
  });

  // src/data.js
  var STANCE_MATRIX = { "1": { "1": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "2": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "3": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "4": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" } }, "2": { "1": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "2": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "3": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "4": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" } }, "3": { "1": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "2": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "3": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "4": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" } }, "4": { "1": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "2": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "3": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "4": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" } }, "5": { "1": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "2": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "3": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "4": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" } }, "6": { "1": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "2": { "0": "orange", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "3": { "0": "orange", "1": "orange", "2": "orange", "3": "orange", "4": "yellow", "5": "yellow" }, "4": { "0": "orange", "1": "orange", "2": "orange", "3": "orange", "4": "orange", "5": "orange" } }, "7": { "1": { "0": "white", "1": "yellow", "2": "yellow", "3": "yellow", "4": "yellow", "5": "yellow" }, "2": { "0": "orange", "1": "orange", "2": "orange", "3": "yellow", "4": "yellow", "5": "yellow" }, "3": { "0": "orange", "1": "orange", "2": "orange", "3": "orange", "4": "orange", "5": "yellow" }, "4": { "0": "orange", "1": "orange", "2": "orange", "3": "orange", "4": "orange", "5": "orange" } }, "8": { "1": { "0": "orange", "1": "orange", "2": "orange", "3": "orange", "4": "yellow", "5": "yellow" }, "2": { "0": "orange", "1": "orange", "2": "orange", "3": "orange", "4": "yellow", "5": "yellow" }, "3": { "0": "red", "1": "red", "2": "red", "3": "orange", "4": "orange", "5": "orange" }, "4": { "0": "red", "1": "red", "2": "red", "3": "red", "4": "orange", "5": "orange" } }, "9": { "1": { "0": "red", "1": "red", "2": "red", "3": "orange", "4": "orange", "5": "orange" }, "2": { "0": "red", "1": "red", "2": "red", "3": "red", "4": "orange", "5": "orange" }, "3": { "0": "red", "1": "red", "2": "red", "3": "red", "4": "red", "5": "orange" }, "4": { "0": "red", "1": "red", "2": "red", "3": "red", "4": "red", "5": "red" } }, "10": { "1": { "0": "red", "1": "red", "2": "red", "3": "red", "4": "red", "5": "orange" }, "2": { "0": "red", "1": "red", "2": "red", "3": "red", "4": "red", "5": "red" }, "3": { "0": "red", "1": "red", "2": "red", "3": "red", "4": "red", "5": "red" }, "4": { "0": "red", "1": "red", "2": "red", "3": "red", "4": "red", "5": "red" } } };
  var COUNTRIES = [["Afghanistan", 42647492, 4, 5], ["Albania", 2377128, 2, 0], ["Algeria", 46814308, 3, 0], ["Angola", 37885849, 4, 0], ["Antigua and Barbuda", 93772, 2, 0], ["Argentina", 45696159, 2, 0], ["Armenia", 3033500, 2, 0], ["Australia", 27196812, 1, 0], ["Austria", 9177982, 1, 0], ["Azerbaijan", 10202830, 2, 0], ["Bahamas", 401283, 1, 0], ["Bahrain", 1588670, 1, 0], ["Bangladesh", 173562364, 3, 3], ["Barbados", 282467, 2, 0], ["Belarus", 9132629, 2, 0], ["Belgium", 11858610, 1, 0], ["Belize", 417072, 3, 0], ["Benin", 14462724, 4, 0], ["Bhutan", 791524, 3, 0], ["Bolivia (Plurinational State of)", 12388571, 3, 0], ["Bosnia and Herzegovina", 3180740, 2, 0], ["Botswana", 2675352, 2, 0], ["Brazil", 216422446, 2, 0], ["Brunei Darussalam", 452524, 1, 0], ["Bulgaria", 6687717, 2, 0], ["Burkina Faso", 23251736, 4, 2], ["Burundi", 13238559, 4, 2], ["Cabo Verde", 598682, 2, 0], ["Cambodia", 17638592, 3, 0], ["Cameroon", 28647293, 4, 3], ["Central African Republic", 5742315, 4, 3], ["Chad", 18278568, 4, 4], ["Chile", 19764771, 1, 0], ["China", 1425178782, 2, 0], ["Colombia", 52085168, 2, 3], ["Comoros", 852075, 3, 0], ["Congo", 6106869, 3, 0], ["Costa Rica", 5212173, 2, 0], ["Croatia", 3850894, 1, 0], ["Cuba", 11194449, 2, 0], ["Cyprus", 1358476, 1, 0], ["Czech Republic", 10827529, 1, 1], ["C\xF4te d'Ivoire", 28873034, 4, 4], ["Democratic People's Republic of Korea", 26160821, 3, 0], ["Democratic Republic of the Congo", 102262808, 4, 3], ["Denmark", 5910913, 1, 0], ["Djibouti", 1120849, 3, 0], ["Dominican Republic", 11228370, 2, 0], ["Ecuador", 18135463, 2, 3], ["Egypt", 112716598, 3, 0], ["El Salvador", 6364943, 2, 2], ["Equatorial Guinea", 1714671, 3, 0], ["Eritrea", 3748901, 4, 0], ["Estonia", 1373101, 1, 0], ["Eswatini", 1201670, 3, 0], ["Ethiopia", 126527060, 4, 5], ["Fiji", 936375, 2, 0], ["Finland", 5617310, 1, 0], ["France", 64756584, 1, 0], ["Gabon", 2436566, 2, 0], ["Gambia", 2773168, 3, 0], ["Georgia", 3728282, 2, 0], ["Germany", 84482267, 1, 2], ["Ghana", 34121985, 3, 0], ["Greece", 10341277, 1, 2], ["Guatemala", 18092026, 3, 2], ["Guinea", 14190612, 4, 0], ["Guinea-Bissau", 2150842, 4, 0], ["Guyana", 813834, 2, 0], ["Haiti", 11724763, 4, 1], ["Honduras", 10593798, 3, 2], ["Hungary", 10156239, 1, 1], ["Iceland", 393396, 1, 0], ["India", 1428627663, 3, 0], ["Indonesia", 277534122, 3, 0], ["Iran (Islamic Republic of)", 89172767, 3, 0], ["Iraq", 45504560, 3, 3], ["Ireland", 5255017, 1, 0], ["Israel", 9174520, 1, 0], ["Italy", 58761146, 1, 2], ["Jamaica", 2825544, 2, 0], ["Japan", 123294513, 1, 0], ["Jordan", 11337052, 2, 4], ["Kazakhstan", 19606633, 2, 0], ["Kenya", 55100586, 3, 5], ["Kiribati", 131232, 2, 0], ["Kuwait", 4310108, 1, 0], ["Kyrgyzstan", 6974998, 2, 0], ["Lao People's Democratic Republic", 7529475, 3, 0], ["Latvia", 1830211, 1, 0], ["Lebanon", 5489739, 2, 4], ["Lesotho", 2330318, 3, 0], ["Liberia", 5418377, 4, 2], ["Libya", 6888388, 2, 2], ["Lithuania", 2718352, 1, 0], ["Luxembourg", 660809, 1, 0], ["Madagascar", 30325732, 4, 0], ["Malawi", 20931751, 4, 0], ["Malaysia", 34308525, 2, 1], ["Maldives", 521457, 2, 0], ["Mali", 23293698, 4, 4], ["Malta", 535064, 1, 0], ["Marshall Islands", 41996, 2, 0], ["Mauritania", 4862989, 4, 0], ["Mauritius", 1300557, 2, 0], ["Mexico", 128455567, 2, 2], ["Micronesia (Federated States of)", 114164, 2, 0], ["Moldova (Republic of)", 3435931, 2, 0], ["Mongolia", 3447157, 2, 0], ["Montenegro", 626485, 2, 0], ["Morocco", 37840044, 3, 0], ["Mozambique", 33897354, 4, 0], ["Myanmar", 54577997, 3, 5], ["Namibia", 2604172, 3, 0], ["Nauru", 12780, 2, 0], ["Nepal", 30896590, 3, 0], ["Netherlands", 17879327, 1, 0], ["New Zealand", 5228100, 1, 0], ["Nicaragua", 7046310, 3, 0], ["Niger", 27202843, 4, 4], ["Nigeria", 223804632, 4, 5], ["North Macedonia", 2093599, 2, 0], ["Norway", 5474360, 1, 0], ["Oman", 4644384, 1, 0], ["Pakistan", 240485658, 4, 5], ["Palau", 18055, 1, 0], ["Panama", 4408581, 2, 0], ["Papua New Guinea", 10329931, 3, 0], ["Paraguay", 6861524, 2, 0], ["Peru", 34352719, 2, 3], ["Philippines", 117337368, 3, 1], ["Poland", 41026067, 1, 1], ["Portugal", 10247605, 1, 0], ["Qatar", 2716391, 1, 0], ["Romania", 19892812, 2, 1], ["Russian Federation", 144236933, 2, 0], ["Rwanda", 14094683, 3, 0], ["Saint Lucia", 180251, 2, 0], ["Saint Vincent and the Grenadines", 103698, 2, 0], ["Samoa", 225681, 2, 0], ["Sao Tome and Principe", 231856, 3, 0], ["Saudi Arabia", 36947025, 1, 0], ["Senegal", 17763163, 3, 0], ["Serbia", 7149077, 2, 2], ["Sierra Leone", 8791092, 4, 2], ["Singapore", 6014723, 1, 0], ["Slovakia", 5795199, 1, 1], ["Slovenia", 2119675, 1, 0], ["Solomon Islands", 740424, 3, 0], ["Somalia", 18143378, 4, 4], ["South Africa", 60414495, 3, 0], ["South Sudan", 11088796, 4, 5], ["Spain", 47519628, 1, 0], ["Sri Lanka", 21893579, 2, 0], ["State of Palestine", 5371230, 4, 1], ["Sudan", 48109006, 4, 3], ["Suriname", 623236, 2, 0], ["Sweden", 10612086, 1, 0], ["Switzerland", 8796669, 1, 0], ["Syrian Arab Republic", 24672760, 3, 4], ["Tajikistan", 10143543, 3, 0], ["Thailand", 71801279, 2, 3], ["Timor-Leste", 1360596, 3, 0], ["Togo", 9053799, 4, 0], ["Tonga", 107773, 2, 0], ["Trinidad and Tobago", 1534937, 2, 0], ["Tunisia", 12458223, 2, 1], ["Turkey", 85816199, 2, 1], ["Turkmenistan", 6516100, 3, 0], ["Tuvalu", 11312, 2, 0], ["Uganda", 48582334, 4, 5], ["Ukraine", 37e6, 2, 3], ["United Arab Emirates", 9441129, 1, 0], ["United Kingdom", 67736802, 1, 0], ["United Republic of Tanzania", 67438106, 4, 4], ["United States of America", 339996563, 1, 0], ["Uruguay", 3423108, 1, 0], ["Uzbekistan", 35163944, 2, 0], ["Vanuatu", 326740, 2, 0], ["Venezuela (Bolivarian Republic of)", 28838499, 3, 3], ["Viet Nam", 98858950, 2, 0], ["Yemen", 34449825, 4, 2], ["Zambia", 20569737, 3, 0], ["Zimbabwe", 16665409, 3, 2]];
  var THRESHOLDS = {
    conflict: {
      deaths: [[10, 1], [100, 2], [500, 3], [2500, 4], [1e4, 5]],
      injuries: [[50, 1], [500, 2], [2500, 3], [1e4, 4], [5e4, 5]],
      displaced: [[1e4, 1], [1e5, 2], [5e5, 3], [15e5, 4], [3e6, 5]],
      affected: [[23e3, 1], [16e4, 2], [55e4, 3], [18e5, 4], [4e6, 5]],
      proportion: [[9e-4, 1], [21e-4, 2], [0.0131, 3], [0.078, 4], [0.2, 5]]
    },
    outbreak: {
      total_affected: [[80, 1], [1200, 2], [4500, 3], [2e4, 4], [18e4, 5]],
      confirmed: [[45, 1], [650, 2], [2e3, 3], [9500, 4], [1e5, 5]],
      deaths: [[1, 1], [70, 2], [250, 3], [1e3, 4], [3500, 5]],
      proportion: [[4e-4, 1], [53e-4, 2], [0.0367, 3], [0.1216, 4], [1.5, 5]]
    },
    food: {
      ipc4: [[100, 1], [3e3, 2], [34333, 3], [1e5, 4], [28e4, 5]],
      ipc_prop: [[1e-5, 1], [1e-4, 2], [17e-4, 3], [61e-4, 4], [0.015, 5]],
      erd: [[100, 1], [3364, 2], [22829, 3], [58099, 4], [122267, 5]],
      erd_pct: [[0.01, 1], [0.03, 2], [0.05, 3], [0.1, 4], [0.18, 5]]
    },
    hazard: {
      displaced: [[10, 1], [100, 2], [2e4, 3], [8e4, 4], [15e4, 5]],
      dead: [[10, 1], [100, 2], [500, 3], [900, 4], [1700, 5]],
      injured: [[10, 1], [100, 2], [1200, 3], [3e3, 4], [5200, 5]],
      ptsd: [[50, 1], [500, 2], [88e3, 3], [16e4, 4], [33e4, 5]]
    }
  };
  var METRIC_CONFIGS = {
    conflict: [
      { id: "deaths", label: "Deaths", hint: "Total number of deaths" },
      { id: "injuries", label: "Injuries", hint: "Total number of injuries" },
      { id: "displaced", label: "Internally Displaced Persons (IDPs)", hint: "Number of people displaced from home" },
      { id: "affected", label: "Total Affected Population", hint: "Total affected population in area" },
      { id: "proportion", label: "Proportion of Population Affected", hint: "Affected as % of total population (0-1)" }
    ],
    outbreak: [
      { id: "total_affected", label: "Total Affected", hint: "Total affected population" },
      { id: "confirmed", label: "Confirmed Cases", hint: "Confirmed disease cases" },
      { id: "deaths", label: "Deaths", hint: "Total deaths from disease" },
      { id: "proportion", label: "Proportion Affected", hint: "Affected as % of total population (0-1)" }
    ],
    food: [
      { id: "ipc4", label: "IPC Phase 4 Population", hint: "Number in IPC Phase 4" },
      { id: "ipc_prop", label: "Proportion in IPC Phase 4", hint: "IPC 4 as % of total population (0-1)" },
      { id: "erd", label: "Emergency Relief Deficit (ERD)", hint: "ERD number" },
      { id: "erd_pct", label: "ERD Percentage", hint: "ERD as % (0-1)" }
    ],
    hazard: [
      { id: "displaced", label: "Displaced from Home", hint: "People displaced by hazard" },
      { id: "dead", label: "Dead or Missing", hint: "Total dead or missing" },
      { id: "injured", label: "Injured", hint: "Total injured" },
      { id: "ptsd", label: "PTSD Cases", hint: "Estimated PTSD cases" }
    ]
  };

  // src/supabase.js
  var SUPABASE_URL = "https://qykjjfbdvwqxqmsgiebs.supabase.co";
  var SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5a2pqZmJkdndxeHFtc2dpZWJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMjg1NzcsImV4cCI6MjA4ODYwNDU3N30.N3XWpfTggpjHu8Kyw0DWnYnZvBqA1aVuWEJixo_ibAw";
  var TABLE = "classifications";
  var BASE_URL = SUPABASE_URL + "/rest/v1/" + TABLE;
  var HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": "Bearer " + SUPABASE_KEY,
    "Content-Type": "application/json",
    "Prefer": "return=representation"
  };
  var TO_SNAKE = {
    classificationId: "classification_id",
    emergencyName: "emergency_name",
    expirationDate: "expiration_date",
    processingSpeed: "processing_speed",
    reclassificationNumber: "reclassification_number",
    previousSeverity: "previous_severity",
    createdAt: "created_at",
    updatedAt: "updated_at",
    totalAffected: "total_affected",
    linkToSpreadsheet: "link_to_spreadsheet",
    ipc4Used: "ipc4_used",
    hazardType: "hazard_type",
    sapTracking: "sap_tracking",
    uniqueId: "unique_id",
    dateRequestReceived: "date_request_received",
    dateSentForEntry: "date_sent_for_entry",
    dateReviewed: "date_reviewed",
    dateApproved: "date_approved",
    dateExpirationNoticeSent: "date_expiration_notice_sent",
    whoEngagesCp: "who_engages_cp",
    entryBy: "entry_by",
    reviewedBy: "reviewed_by",
    approvedBy: "approved_by",
    notifSentBy: "notif_sent_by",
    raisedWithCpRegion: "raised_with_cp_region",
    codeNumber: "code_number"
  };
  var TO_CAMEL = {};
  for (const k in TO_SNAKE)
    TO_CAMEL[TO_SNAKE[k]] = k;
  function mapToSnake(record) {
    const out = {};
    for (const key in record) {
      if (!record.hasOwnProperty(key))
        continue;
      out[TO_SNAKE[key] || key] = record[key];
    }
    [
      "type",
      "stance",
      "country",
      "emergency_name",
      "region",
      "processing_speed",
      "classification_id",
      "date",
      "expiration_date",
      "link_to_spreadsheet",
      "hazard_type",
      "sap_tracking",
      "unique_id",
      "who_engages_cp",
      "entry_by",
      "reviewed_by",
      "approved_by",
      "notif_sent_by",
      "raised_with_cp_region",
      "code_number",
      "date_request_received",
      "date_sent_for_entry",
      "date_reviewed",
      "date_approved",
      "date_expiration_notice_sent"
    ].forEach(function(f) {
      if (out[f] === "")
        out[f] = null;
    });
    if (out.ipc4_used !== null && out.ipc4_used !== void 0) {
      if (typeof out.ipc4_used === "string") {
        out.ipc4_used = out.ipc4_used.toLowerCase() === "yes" || out.ipc4_used === "true" || out.ipc4_used === "1";
      }
    }
    if (out.total_affected !== null && out.total_affected !== void 0) {
      out.total_affected = parseFloat(out.total_affected);
      if (isNaN(out.total_affected))
        out.total_affected = null;
    }
    [
      "date",
      "expiration_date",
      "date_request_received",
      "date_sent_for_entry",
      "date_reviewed",
      "date_approved",
      "date_expiration_notice_sent"
    ].forEach(function(f) {
      if (out[f] !== null && out[f] !== void 0 && out[f] !== "") {
        var dStr = out[f].toString().trim();
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dStr)) {
          var d = new Date(dStr);
          if (!isNaN(d.getTime()) && d.getFullYear() > 1900 && d.getFullYear() < 2100) {
            var yyyy = d.getFullYear();
            var mm = String(d.getMonth() + 1).padStart(2, "0");
            var dd = String(d.getDate()).padStart(2, "0");
            out[f] = yyyy + "-" + mm + "-" + dd;
          } else {
            out[f] = null;
          }
        }
      }
    });
    ["metrics", "confidence", "subnational"].forEach(function(f) {
      if (typeof out[f] === "string") {
        try {
          out[f] = JSON.parse(out[f]);
        } catch (e) {
          out[f] = {};
        }
      }
      if (out[f] === "" || out[f] === null || out[f] === void 0)
        out[f] = null;
    });
    if (out.severity !== null && out.severity !== void 0) {
      out.severity = parseInt(out.severity, 10);
      if (isNaN(out.severity))
        out.severity = null;
    }
    if (out.reclassification_number !== null && out.reclassification_number !== void 0) {
      out.reclassification_number = parseInt(out.reclassification_number, 10);
      if (isNaN(out.reclassification_number))
        out.reclassification_number = null;
    }
    if (out.previous_severity !== null && out.previous_severity !== void 0) {
      out.previous_severity = parseInt(out.previous_severity, 10);
      if (isNaN(out.previous_severity))
        out.previous_severity = null;
    }
    return out;
  }
  function mapToCamel(row) {
    const out = {};
    for (const key in row) {
      if (!row.hasOwnProperty(key))
        continue;
      out[TO_CAMEL[key] || key] = row[key];
    }
    return out;
  }
  var PAGE_SIZE = 1e3;
  function fetchAll(url) {
    const accumulated = [];
    const joiner = url.indexOf("?") === -1 ? "?" : "&";
    function fetchPage(offset) {
      const pageUrl = url + joiner + "limit=" + PAGE_SIZE + "&offset=" + offset;
      return fetch(pageUrl, { headers: HEADERS }).then(function(res) {
        if (!res.ok)
          throw new Error("Supabase fetch failed: " + res.status);
        return res.json();
      }).then(function(rows) {
        accumulated.push(...rows);
        if (rows.length >= PAGE_SIZE)
          return fetchPage(offset + PAGE_SIZE);
        return accumulated;
      });
    }
    return fetchPage(0);
  }
  function fetchClassifications() {
    return fetchAll(BASE_URL + "?order=date.desc.nullslast").then(function(rows) {
      return rows.map(mapToCamel);
    }).catch(function(err) {
      console.warn("[Supabase] Failed to fetch classifications:", err);
      return [];
    });
  }

  // src/utils.js
  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
  function formatNum(n) {
    if (typeof n !== "number")
      return "0";
    return n.toLocaleString("en-US");
  }
  function formatDate(dateStr) {
    if (!dateStr)
      return "";
    var parts = dateStr.split("-");
    if (parts.length !== 3)
      return dateStr;
    var date = new Date(parts[0], parts[1] - 1, parts[2]);
    if (isNaN(date.getTime()))
      return dateStr;
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  function isExpired(expirationDate) {
    if (!expirationDate)
      return false;
    var exp = new Date(expirationDate);
    if (isNaN(exp.getTime()))
      return false;
    return /* @__PURE__ */ new Date() > exp;
  }
  function daysUntilExpiration(expirationDate) {
    if (!expirationDate)
      return null;
    var exp = new Date(expirationDate);
    if (isNaN(exp.getTime()))
      return null;
    return Math.ceil((exp - /* @__PURE__ */ new Date()) / (1e3 * 60 * 60 * 24));
  }
  function lookupStance(severity, pv, rob) {
    if (!severity || !pv)
      return "white";
    var s = STANCE_MATRIX[severity];
    if (!s)
      return "white";
    var p = s[pv];
    if (!p)
      return "white";
    return p[rob] || "white";
  }
  function calculateSeverity(value, thresholds) {
    if (value === null || value === void 0 || isNaN(value))
      return 0;
    var score = 0;
    for (var i = 0; i < thresholds.length; i++) {
      if (value >= thresholds[i][0])
        score = thresholds[i][1];
    }
    return score;
  }
  function calculateOverallStance(stances) {
    if (!stances || !stances.length)
      return "white";
    var counts = { white: 0, yellow: 0, orange: 0, red: 0 };
    stances.forEach(function(s) {
      if (counts[s] !== void 0)
        counts[s]++;
    });
    var highest = "white";
    if (counts.yellow > 0)
      highest = "yellow";
    if (counts.orange > 0)
      highest = "orange";
    if (counts.red > 0)
      highest = "red";
    if (counts.orange >= 2)
      return "red";
    if (counts.yellow >= 3)
      return "orange";
    return highest;
  }
  function findCountry(name) {
    if (!name)
      return null;
    var lower = name.toLowerCase();
    return COUNTRIES.find(function(c) {
      return c[0].toLowerCase() === lower;
    }) || null;
  }

  // src/site-config.js
  function detectEnvironment() {
    if (typeof window === "undefined")
      return "server";
    var hostname = window.location.hostname;
    if (hostname === "bobkitchen.github.io")
      return "github";
    if (hostname === "localhost" || hostname === "127.0.0.1")
      return "localhost";
    return "file";
  }
  function getSettingsUrl() {
    var env = detectEnvironment();
    return env === "github" ? "/emergency-classification/settings.html" : "settings.html";
  }
  function getSiteConfig() {
    var env = detectEnvironment();
    return {
      classification: {
        label: "Emergency Classification",
        shortLabel: "Classification",
        description: "Classify and track emergency responses",
        url: env === "github" ? "/emergency-classification/" : "index.html",
        pages: [
          { id: "dashboard", url: "index.html", label: "Dashboard" },
          { id: "classify", url: "classify.html", label: "Classify" },
          { id: "ask-albert", url: "ask-albert.html", label: "Ask Albert" },
          { id: "data", url: "data.html", label: "Data" }
        ]
      },
      navigator: {
        label: "Response Navigator",
        shortLabel: "Navigator",
        description: "Emergency response guidance and tasks",
        url: env === "github" ? "/emergency-response-navigator/" : "/",
        pages: [
          { id: "home", url: "", label: "Home" },
          { id: "navigator", url: "navigator", label: "Navigator" },
          { id: "resources", url: "resources", label: "Resources" }
        ]
      },
      crf: {
        label: "CRF Calculator",
        shortLabel: "CRF",
        description: "Crisis Response Fund allocation calculator",
        url: env === "github" ? "/crf-calculator/allocation-calculator.html" : "allocation-calculator.html",
        pages: [
          { id: "calculator", url: "allocation-calculator.html", label: "Calculator" }
        ]
      }
    };
  }
  var STORAGE_KEYS = {
    openRouterApiKey: "irc_openrouter_api_key",
    openRouterModel: "irc_openrouter_model",
    classifications: "irc_classifications",
    theme: "irc_theme",
    userPreferences: "irc_user_preferences"
  };

  // src/header.js
  var IRC_LOGO_SVG = '<svg viewBox="0 0 217 216.99" xmlns="http://www.w3.org/2000/svg"><rect fill="#FDC62F" width="217" height="216.99"/><path fill="#00040C" d="M26.6,26.6h163.81v63.15h-55.22l55.22,55.22v45.44h-45.44l-55.22-55.21v55.21H26.6V26.6Z"/></svg>';
  var CHAT_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>';
  var IRC_LOGO_DATA_URI = "data:image/svg+xml," + encodeURIComponent('<svg viewBox="0 0 217 216.99" xmlns="http://www.w3.org/2000/svg"><rect fill="#FDC62F" width="217" height="216.99"/><path fill="#00040C" d="M26.6,26.6h163.81v63.15h-55.22l55.22,55.22v45.44h-45.44l-55.22-55.21v55.21H26.6V26.6Z"/></svg>');
  function renderHeader(activePage, currentSite) {
    currentSite = currentSite || "classification";
    var config = getSiteConfig();
    var site = config[currentSite];
    var allSiteKeys = Object.keys(config);
    var switcherOptionsHtml = allSiteKeys.map(function(key) {
      var s = config[key];
      var isActive = key === currentSite;
      return '<a href="' + s.url + '" class="site-switcher-option' + (isActive ? " active" : "") + '"><span class="site-switcher-option-name">' + s.label + '</span><span class="site-switcher-option-desc">' + s.description + "</span></a>";
    }).join("");
    var switcherHtml = `<div class="site-switcher"><button class="site-switcher-toggle" onclick="this.parentElement.classList.toggle('open')" aria-expanded="false" aria-haspopup="true"><span class="site-switcher-label">` + site.shortLabel + '</span><svg class="site-switcher-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="site-switcher-dropdown">' + switcherOptionsHtml + "</div></div>";
    var navHtml = '<nav class="header-nav">';
    site.pages.forEach(function(page) {
      var isActive = activePage === page.id || activePage === page.url || activePage === page.label.toLowerCase();
      if (page.id === "ask-albert") {
        navHtml += '<a href="' + page.url + '" class="ask-albert-btn' + (isActive ? " active" : "") + '">' + CHAT_ICON_SVG + " " + page.label + "</a>";
      } else {
        navHtml += '<a href="' + page.url + '" class="' + (isActive ? "active" : "") + '">' + page.label + "</a>";
      }
    });
    navHtml += '<a href="' + getSettingsUrl() + '" class="settings-gear-btn' + (activePage === "settings" ? " active" : "") + '" title="Settings"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></a>';
    navHtml += "</nav>";
    var mobileNavHtml = '<nav class="mobile-nav" id="mobile-nav">';
    site.pages.forEach(function(page) {
      var isActive = activePage === page.id || activePage === page.url || activePage === page.label.toLowerCase();
      if (page.id === "ask-albert") {
        mobileNavHtml += '<a href="' + page.url + '" class="ask-albert-btn' + (isActive ? " active" : "") + '">' + CHAT_ICON_SVG + " " + page.label + "</a>";
      } else {
        mobileNavHtml += '<a href="' + page.url + '" class="' + (isActive ? "active" : "") + '">' + page.label + "</a>";
      }
    });
    mobileNavHtml += '<a href="' + getSettingsUrl() + '" class="settings-gear-btn' + (activePage === "settings" ? " active" : "") + '" title="Settings"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> Settings</a>';
    mobileNavHtml += "</nav>";
    var hamburgerHtml = `<button class="mobile-menu-btn" onclick="var nav=document.getElementById('mobile-nav');nav.classList.toggle('open');this.setAttribute('aria-expanded',nav.classList.contains('open'))" aria-label="Menu" aria-expanded="false"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>`;
    var titles = {
      classification: { title: "Emergency Classification", subtitle: "a Global Crisis Analysis project" },
      navigator: { title: "Emergency Response Navigator", subtitle: "An Emergency Unit Project" },
      crf: { title: "CRF Allocation Calculator", subtitle: "Crisis Response Fund" }
    };
    var t = titles[currentSite] || titles.classification;
    return '<header><div class="header-inner">' + switcherHtml + '<a href="' + site.url + '" class="header-brand"><div class="logo-container">' + IRC_LOGO_SVG + '</div><div><div class="header-title">' + t.title + '</div><div class="header-subtitle">' + t.subtitle + "</div></div></a>" + navHtml + hamburgerHtml + "</div>" + mobileNavHtml + "</header>";
  }
  function renderFooter() {
    return `<footer><div class="footer-inner"><div class="footer-section"><div class="footer-title">About This Tool</div><div class="footer-text">The Emergency Classification System assesses the scale and severity of new emergencies to inform IRC response decisions and resourcing. Classifications are aligned with the IRC's Who We Serve / Where We Work criteria, focusing resources where they are most needed based on client impact and IRC readiness to respond.</div></div><div class="footer-section"><div class="footer-title">Methodology</div><div class="footer-text">Severity (1-10) is determined by comparing standard data points to historic emergencies. Response stances (White/Yellow/Orange/Red) indicate resource availability. White = outside mission scope. Each classification is open for 6 weeks, with reclassification rules enforcing escalation criteria.</div></div><div class="footer-legal">&copy; International Rescue Committee. For internal use only.</div></div></footer>`;
  }
  function initSiteSwitcher() {
    document.addEventListener("click", function(e) {
      var switcher = document.querySelector(".site-switcher");
      if (switcher && !switcher.contains(e.target)) {
        switcher.classList.remove("open");
      }
    });
  }
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=irc-shared.iife.js.map
