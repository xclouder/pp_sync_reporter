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
			des:"detail",	//detail
			fixedFrmCnt:0,
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
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
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
	"车离得太远",
];

function getStateName(enumId)
{
	if (enumId == 999)
	{
		return "Init";
	}
	else
	{
		return modelTimeTypeChangedDes_EnumDict[enumId];
	}
}

var modelTimeTypeChangedDes = {
	getDesItem: function(timelineItem){

		var typeDes = "隐形车EModelTimeType更新";
		var stateName = getStateName(timelineItem.data);
		var detail = "更新为:" + stateName;
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
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
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
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
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var lerpStartTimeUpdated = {
	getDesItem: function(timelineItem){

		var typeDes = "更新lerpStartTime";
		var detail = "时间：" + timelineItem.data;
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var dynModelUpdatePosData = {
	getDesItem: function(timelineItem){

		var typeDes = "[外观车]动力模型更新PosData";
		var detail = "[外观车]pos：" + JSON.stringify(timelineItem.data);
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var onCollision = {
	getDesItem: function(timelineItem){

		var typeDes = "发生碰撞";
		var detail = "数据：" + JSON.stringify(timelineItem.data);
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var fixedUpdatePos = {
	getDesItem: function(timelineItem){

		var typeDes = "更新Pos";
		var detail = "pos：" + JSON.stringify(timelineItem.data);
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var gameObjNotActive = {
	getDesItem: function(timelineItem){

		var typeDes = "对象不可见";
		var detail = "gameObject activeInHierarchy为false，可能被cull"
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var dynModelUpdatePosData_InvisibleModel = {
	getDesItem: function(timelineItem){

		var typeDes = "[隐形车]动力模型更新PosData";
		var detail = "[隐形车]pos：" + JSON.stringify(timelineItem.data);
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var polynormalLerpStart = {
	getDesItem: function(timelineItem){

		var typeDes = "[外观车]插值开始";
		var detail = "[外观车]插值参数：" + JSON.stringify(timelineItem.data);
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var NET_KART_STATE = ["Normal", "Lerping", "Collid"];
var netKartEnterState = {
	getDesItem: function(timelineItem){

		var state = NET_KART_STATE[timelineItem.data["state"]];
		var typeDes = "进入状态:" + state;
		var detail = JSON.stringify(timelineItem.data);
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var netKartExitState = {
	getDesItem: function(timelineItem){

		var state = NET_KART_STATE[timelineItem.data["state"]];
		var typeDes = "退出状态:" + state;
		var detail = "State:" + state;
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var onStartPredicate = {
	getDesItem: function(timelineItem){
		var typeDes = "开始预测";
		var detail = "";
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var onMadePredicate = {
	getDesItem: function(timelineItem){
		var typeDes = "预测完成";
		var detail = JSON.stringify(timelineItem.data);
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
		};
	},
}

var onPredicateInterrupted = {
	getDesItem: function(timelineItem){
		var typeDes = "中断预测";
		var detail = "";
		return {
			time:timelineItem.time, //time
			evt:typeDes, //type
			des:detail,	//detail
			fixedFrmCnt:timelineItem.fixedFrmCnt,
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
timelineDesFactory.addDescriptor(4, lerpStartTimeUpdated);
timelineDesFactory.addDescriptor(5, dynModelUpdatePosData);
timelineDesFactory.addDescriptor(6, onCollision);
timelineDesFactory.addDescriptor(7, fixedUpdatePos);
timelineDesFactory.addDescriptor(8, gameObjNotActive);
timelineDesFactory.addDescriptor(9, dynModelUpdatePosData_InvisibleModel);
timelineDesFactory.addDescriptor(10, polynormalLerpStart);

timelineDesFactory.addDescriptor(100, netKartEnterState);
timelineDesFactory.addDescriptor(101, netKartExitState);
timelineDesFactory.addDescriptor(102, onStartPredicate);
timelineDesFactory.addDescriptor(103, onMadePredicate);
timelineDesFactory.addDescriptor(104, onPredicateInterrupted);
