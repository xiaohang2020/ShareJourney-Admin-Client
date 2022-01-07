import Vue from 'vue'
import {
	Button,
	Form,
	FormItem,
	Input,
	Message,
	Header,
	Aside,
	Footer,
	Container,
	Main,
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	Breadcrumb,
	BreadcrumbItem,
	Card,
	Row,
	Col,
	Table,
	TableColumn,
	Switch,
	Tooltip,
	Pagination,
	Dialog,
	MessageBox,
	Tag,
	Tree,
	Select,
	Option,
	Cascader,
	Alert,
	Tabs,
	TabPane,
	Steps,
	Step,
	CheckboxGroup,
	Checkbox,
	Upload,
	Radio,
	RadioGroup,
	DatePicker,
	Loading,
	Timeline,
	TimelineItem
} from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Container)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Upload)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(DatePicker)
Vue.use(Loading)
Vue.use(Timeline)
Vue.use(TimelineItem)
// 挂载在vue原型对象上
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

Vue.use(Button)