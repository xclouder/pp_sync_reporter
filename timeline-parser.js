/*
生成对应timeline类型描述信息
*/
timelineDesFactory = {
	_desDict:{},

	addDescriptor: function(typ, obj){
		this._desDict[typ] = obj;
	},

	getDescriptor: function(typ){
		return this._desDict[typ];
	},
}

var timelineDesBase = {
	getDesItem: function(timelineItem){
		return {
			time:0, //time
			evt:"type des", //type
			des:"detail"	//detail
		};
	},
};

var newPackReceivedItemDes = {
	getDesItem: function(timelineItem){

		var typeDes = "收到同步包";
		var detail = JSON.stringify(timelineItem.data);
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail	//detail
		};
	},
};

/*
public enum EModelTimeType
{
    Normal,                 // 常规更新
    Chase,                  // 隐形车追帧过程
    NoLerp,                 // 不使用插值
    CubicInterpolation,     // 三次插值过程
    IsTooFar,               // 车离得太远
}
*/
var modelTimeTypeChangedDes_EnumDict = [
	"常规更新",
	"隐形车追帧过程",
	"不使用插值",
	"三次插值过程",
	"车离得太远"
];

var modelTimeTypeChangedDes = {
	getDesItem: function(timelineItem){

		var typeDes = "隐形车EModelTimeType更新";
		var detail = "更新为:" + modelTimeTypeChangedDes_EnumDict[timelineItem.data];
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail	//detail
		};
	},
};

var invisibleModelRached = {
	getDesItem: function(timelineItem){

		var typeDes = "隐形车到达目标位置，可见车开始追";
		var detail = "可见车与目标位置的距离：" + timelineItem.data;
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail	//detail
		};
	},
}

var visibleModelInterpolateFinish = {
	getDesItem: function(timelineItem){

		var typeDes = "可见车插值结束";
		var detail = "可见车与隐形车距离：" + timelineItem.data;
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail	//detail
		};
	},
}

/*有时间了再研究下ECMAScript6的class特性
class TimelineDesBase
{
	get getDesItem
}

class NewPackReceivedItemDes extends TimelineDesBase
{

}
*/

/*
public enum SyncRecordTimelineEnum
{
    NewPackReceived,
    ModelTimeTypeChanged,
    InvisibleModelRached,
    VisibleModelInterpolateFinish,
}
*/
timelineDesFactory.addDescriptor(0, newPackReceivedItemDes);
timelineDesFactory.addDescriptor(1, modelTimeTypeChangedDes);
timelineDesFactory.addDescriptor(2, invisibleModelRached);
timelineDesFactory.addDescriptor(3, visibleModelInterpolateFinish);

