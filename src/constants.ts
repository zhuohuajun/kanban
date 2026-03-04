import { 
  Users, 
  ClipboardList, 
  CalendarRange,
  Building2,
  Truck,
  MapPin,
  Home,
  UserCheck,
  Users2,
  ShieldCheck,
  SearchCode,
  HeartHandshake,
  Heart,
  Clock
} from 'lucide-react';

// Tab 1: 预警研判 (Warning & Judgment)
export const TREND_DATA = [
  { name: '02-24', governance: 12, models: 8, total: 20 },
  { name: '02-25', governance: 15, models: 10, total: 25 },
  { name: '02-26', governance: 14, models: 12, total: 26 },
  { name: '02-27', governance: 18, models: 11, total: 29 },
  { name: '02-28', governance: 16, models: 14, total: 30 },
  { name: '03-01', governance: 20, models: 15, total: 35 },
];

export const CATEGORY_DATA = [
  { name: '矛盾纠纷', value: 12, color: '#3b82f6' },
  { name: '流动人口', value: 8, color: '#10b981' },
  { name: '刑释人员', value: 5, color: '#f59e0b' },
  { name: '精神病人', value: 4, color: '#8b5cf6' },
  { name: '家暴预警', value: 2, color: '#ef4444' },
  { name: '其他', value: 2, color: '#64748b' },
];

export const WORKFLOW_DATA = [
  { name: '预警提示', count: 35, status: 'normal' },
  { name: '预警签收', count: 32, status: 'success' },
  { name: '预警流转', count: 24, status: 'warning' },
  { name: '预警反馈', count: 20, status: 'info' },
];

export const RECENT_ALERTS = [
  { id: 'AL-001', type: '疑似家暴', level: '高', time: '10:24', status: '待签收', source: '警情治理' },
  { id: 'AL-002', type: '治安高风险', level: '中', time: '11:05', status: '研判中', source: '数据模型' },
  { id: 'AL-003', type: '矛盾纠纷', level: '低', time: '11:42', status: '已反馈', source: '警情治理' },
];

// Tab 2: 质效评价 (Quality & Efficiency)
export const SATISFACTION_DATA = [
  { name: '满意', value: 98.2, color: '#10b981' },
  { name: '不满意', value: 1.8, color: '#f1f5f9' },
];

export const INCIDENT_STATS = [
  { category: '刑事案件', count: 12, solved: 10 },
  { category: '行政案件', count: 45, solved: 38 },
  { category: '求助警情', count: 32, solved: 31 },
  { category: '纠纷警情', count: 18, solved: 16 },
];

export const EXECUTION_ANALYSIS = [
  { subject: '标准件执行', A: 92, full: 100 },
  { subject: '一管三防', A: 88, full: 100 },
  { subject: '响应速度', A: 95, full: 100 },
  { subject: '反馈质量', A: 84, full: 100 },
  { subject: '数据完整性', A: 90, full: 100 },
];

export const REPORT_STATUS = [
  { type: '周报', cycle: '2026-W09', status: '已生成', time: '03-01 08:00' },
  { type: '月报', cycle: '2026-M02', status: '已生成', time: '03-01 00:00' },
  { type: '日报', cycle: '2026-03-01', status: '生成中', time: '进行中' },
];

// Tab 3: 移动应用 (Mobile Application)
export const MOBILE_ONLINE_DATA = [
  { month: '1月', rate: 92.5 },
  { month: '2月', rate: 94.2 },
  { month: '3月', rate: 93.8 },
  { month: '4月', rate: 95.1 },
  { month: '5月', rate: 96.4 },
  { month: '6月', rate: 97.2 },
];

export const MOBILE_BUSINESS_DATA = [
  { month: '1月', volume: 120 },
  { month: '2月', volume: 110 },
  { month: '3月', volume: 135 },
  { month: '4月', volume: 150 },
  { month: '5月', volume: 145 },
  { month: '6月', volume: 160 },
];

export const MOBILE_UNIT_STATS = [
  { unit: '山东省公安厅', totalTerminals: 12, onlineTerminals: 11, totalTasks: 85, completedTasks: 82, uncompletedTasks: 3, completionRate: '96.5%' },
  { unit: '济南市公安局', totalTerminals: 45, onlineTerminals: 43, totalTasks: 320, completedTasks: 310, uncompletedTasks: 10, completionRate: '96.9%' },
  { unit: '青岛市公安局', totalTerminals: 48, onlineTerminals: 46, totalTasks: 350, completedTasks: 335, uncompletedTasks: 15, completionRate: '95.7%' },
];

// Tab 4: 标准运行 (Standard Operation - Dual Lifecycles)
export const STANDARD_ITEM_LIFECYCLE = [
  { stage: '标准件申请', count: 12, color: '#94a3b8' },
  { stage: '标准件审批', count: 10, color: '#60a5fa' },
  { stage: '标准件制作', count: 8, color: '#818cf8' },
];

export const TASK_LIFECYCLE = [
  { stage: '任务发布', count: 35, color: '#34d399' },
  { stage: '任务运行', count: 32, color: '#fbbf24' },
  { stage: '任务完成', count: 28, color: '#f87171' },
];

export const STANDARD_DEFINITION_STATS = [
  { label: '任务对象', value: '重点人员/场所', icon: Users },
  { label: '任务内容', value: '核查/走访/巡逻', icon: ClipboardList },
  { label: '任务周期', value: '日/周/月/专项', icon: CalendarRange },
];

export const STANDARD_ITEM_TYPES = [
  { name: '规定任务', value: 15, color: '#3b82f6', desc: '周期性固定任务' },
  { name: '指令任务', value: 12, color: '#8b5cf6', desc: '临时性下达任务' },
  { name: '推送任务', value: 8, color: '#10b981', desc: '自动化触发任务' },
];

export const MONITORING_ALERTS = [
  { id: 'M-001', unit: '济南市局', task: '重点人核查', status: '已完成', level: '高' },
  { id: 'M-002', unit: '青岛市局', task: '场所巡检', status: '进行中', level: '中' },
  { id: 'M-003', unit: '淄博市局', task: '矛盾排查', status: '待处理', level: '低' },
];

// Tab 5: 组织管理 (Organization Management)
export const STATION_DISTRIBUTION = [
  { name: '济南', value: 12 },
  { name: '淄博', value: 15 },
  { name: '东营', value: 8 },
  { name: '潍坊', value: 6 },
  { name: '泰安', value: 5 },
  { name: '日照', value: 18 },
  { name: '德州', value: 14 },
  { name: '滨州', value: 16 },
  { name: '威海', value: 9 },
  { name: '银山', value: 7 },
];

export const FENGQIAO_DATA = [
  { name: '省级', value: 8, color: '#3b82f6' },
  { name: '国家级', value: 2, color: '#10b981' },
];

export const RANK_DATA = [
  { name: '副科', value: 45, color: '#3b82f6' },
  { name: '副科级以下', value: 32, color: '#10b981' },
  { name: '副处', value: 8, color: '#fbbf24' },
  { name: '正科', value: 25, color: '#f87171' },
];

export const LEVEL_DATA = [
  { name: '一级', value: 5, color: '#3b82f6' },
  { name: '二级', value: 12, color: '#f87171' },
  { name: '三级', value: 3, color: '#10b981' },
  { name: '四级', value: 2, color: '#fbbf24' },
  { name: '五级', value: 1, color: '#60a5fa' },
];

export const POLICE_FORCE_STATS = [
  { name: '济南', police: 150, assistant: 120, other: 80 },
  { name: '淄博', police: 180, assistant: 150, other: 100 },
  { name: '东营', police: 90, assistant: 70, other: 40 },
  { name: '潍坊', police: 120, assistant: 100, other: 60 },
  { name: '泰安', police: 140, assistant: 110, other: 70 },
];

export const AGE_STRUCTURE = [
  { range: '20岁以下', value: 12 },
  { range: '20-30岁', value: 85 },
  { range: '30-40岁', value: 120 },
  { range: '40-50岁', value: 150 },
  { range: '50-60岁', value: 110 },
  { range: '60岁以上', value: 25 },
];

export const VEHICLE_DATA = [
  { name: '济南', value: 45 },
  { name: '青岛', value: 62 },
  { name: '淄博', value: 28 },
  { name: '潍坊', value: 35 },
  { name: '烟台', value: 30 },
  { name: '济宁', value: 25 },
  { name: '泰安', value: 18 },
];

// Tab 7: 任务协同 (Task Collaboration)
export const DEPT_COLLABORATION_DATA = [
  { name: '综治', value: 85, color: '#3b82f6' },
  { name: '司法', value: 72, color: '#10b981' },
  { name: '民政', value: 64, color: '#f59e0b' },
  { name: '卫健', value: 58, color: '#ef4444' },
  { name: '教育', value: 45, color: '#8b5cf6' },
];

export const POLICE_TYPE_FLOW = [
  { stage: '任务发起', count: 120, color: '#60a5fa' },
  { stage: '任务审核', count: 95, color: '#818cf8' },
  { stage: '警种支援', count: 42, color: '#34d399' },
  { stage: '反馈归档', count: 88, color: '#94a3b8' },
];

export const FLOW_REMINDERS = [
  { id: 'R-001', title: '户籍人口迁移提醒', count: 12, type: 'population' },
  { id: 'R-002', title: '流动人口暂住提醒', count: 28, type: 'floating' },
  { id: 'R-003', title: '特定对象户口迁移提醒', count: 5, type: 'special' },
  { id: 'R-004', title: '特定对象流出流入提醒', count: 8, type: 'special' },
  { id: 'R-005', title: '任务标准件流转提醒', count: 15, type: 'task' },
];

export const COLLABORATION_METRICS = [
  { label: '协同任务总数', value: '385', trend: '+12%', icon: ClipboardList },
  { label: '跨部门协作率', value: '92.5%', trend: '+2.4%', icon: Users },
  { label: '平均响应时长', value: '1.2h', trend: '-15%', icon: Clock },
  { label: '任务归档率', value: '98.1%', trend: '+0.5%', icon: ShieldCheck },
];
export const POPULATION_DISTRIBUTION = [
  { name: '户籍人口', value: 850, color: '#3b82f6' },
  { name: '流动人口', value: 320, color: '#10b981' },
  { name: '境外人员', value: 45, color: '#fbbf24' },
];

export const REAL_ELEMENTS = [
  { label: '标准地址', value: '1.2万', icon: MapPin, color: 'text-blue-600' },
  { label: '实有房屋', value: '0.8万', icon: Home, color: 'text-emerald-600' },
  { label: '实有单位', value: '0.1万', icon: Building2, color: 'text-amber-600' },
  { label: '特定对象', value: '45', icon: UserCheck, color: 'text-red-600' },
];

export const OPINION_STATS = [
  { name: '社情民意收集', value: 1, total: 5, color: '#3b82f6', label: '五类' },
  { name: '情况线索发现', value: 2, total: 7, color: '#8b5cf6', label: '七类' },
  { name: '村居干部见面', value: 3, total: 3, color: '#10b981', label: '见面率100%' },
];

export const SECURITY_PREVENTION_STATS = [
  { name: '群防群治管理', value: 5, icon: Users2, color: 'bg-blue-50 text-blue-600' },
  { name: '内保单位管理', value: 2, icon: ShieldCheck, color: 'bg-emerald-50 text-emerald-600' },
  { name: '安防设施巡查', value: 1, icon: SearchCode, color: 'bg-amber-50 text-amber-600' },
];

export const COMMUNITY_ORDER_DATA = [
  { name: '社区治安管理', value: 5 },
  { name: '矛盾纠纷化解', value: 2 },
  { name: '社区案件处置', value: 2 },
  { name: '治安灾害预防', value: 1 },
];

export const SERVICE_MEASURES_DATA = [
  { name: '便民利企服务', value: 3, icon: HeartHandshake, color: 'text-rose-500' },
  { name: '特殊群体关爱', value: 2, icon: Heart, color: 'text-pink-500' },
];

export const RECENT_TASKS = [
  { id: 'TASK-1024', name: '流动人口清查', type: '标准件', status: '运行中', time: '14:20' },
  { id: 'TASK-1025', name: '重点人员走访', type: '任务调度', status: '已完成', time: '15:05' },
  { id: 'TASK-1026', name: '矛盾纠纷排查', type: '标准件', status: '待审批', time: '15:42' },
  { id: 'TASK-1027', name: '治安巡逻任务', type: '任务调度', status: '运行中', time: '16:15' },
];
