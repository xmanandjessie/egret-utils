class StageUtils {
	public constructor() {
	}

	public static stage:egret.Stage;
	public static CW:number;
	public static CH:number;

	public static SW:number;
	public static SH:number;

	public static LW:number;
	public static LH:number;

	// public static SLW:number;
	// public static SLH:number;

	public static registStage(cusStage:egret.Stage):void
	{
		StageUtils.stage = cusStage;

		StageUtils.SW = cusStage.stageWidth;
		StageUtils.SH = cusStage.stageHeight;
		StageUtils.CW = StageUtils.SW >> 1;
		StageUtils.CH = StageUtils.SH >> 1;

		StageUtils.LW = window.innerWidth;
		StageUtils.LH = window.innerHeight;

		// StageUtils.SLW = window.
	}

	

	public static centerInParentX(target:egret.DisplayObject,parent:egret.DisplayObject = null):void
	{
		if(target)
		{
			if(parent)
			{
				target.x = parent.width - target.width >> 1;
			}else
			{
				target.x = StageUtils.stage.stageWidth - target.width >> 1;
			}
		}
	}

	public static centerInParentY(target:egret.DisplayObject,parent:egret.DisplayObject = null):void
	{
		if(target)
		{
			if(parent)
			{
				target.y = parent.height - target.height >> 1;
			}else
			{
				target.y = StageUtils.stage.stageHeight - target.height >> 1;
			}
		}
	}

	public static centerInParent(target:egret.DisplayObject,cusX:number = 0,cusY:number = 0,parent:egret.DisplayObject = null):void
	{
		if(target)
		{
			if(parent)
			{
				target.x = (parent.width - target.width >> 1) + cusX;
				target.y = (parent.height - target.height >> 1) + cusY;
			}else
			{
				target.x = (StageUtils.stage.stageWidth - target.width >> 1) + cusX;
				target.y = (StageUtils.stage.stageHeight - target.height >> 1) + cusY;
			}
		}
	}
}