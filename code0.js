gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDplayerObjects1= [];
gdjs.Untitled_32sceneCode.GDplayerObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2= [];
gdjs.Untitled_32sceneCode.GDrealsoccerObjects1= [];
gdjs.Untitled_32sceneCode.GDrealsoccerObjects2= [];
gdjs.Untitled_32sceneCode.GDenemigoObjects1= [];
gdjs.Untitled_32sceneCode.GDenemigoObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Untitled_32sceneCode.GDplayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Untitled_32sceneCode.GDplayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Physics2").setFriction(30);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Physics2").setBullet(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Physics2").applyPolarImpulse((( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getAngle()), 0, (gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Physics2").getMassCenterX()), (gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Physics2").getMassCenterY()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "x"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].setAnimationFrame(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").applyPolarImpulse(-(90), 0.1, (gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").getMassCenterX()), (gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").getMassCenterY()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").applyPolarImpulse(180, 0.1, (gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").getMassCenterX()), (gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").getMassCenterY()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").applyPolarImpulse(0, 0.1, (gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").getMassCenterX()), (gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").getMassCenterY()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").applyPolarImpulse(90, 0.1, (gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").getMassCenterX()), (gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Physics2").getMassCenterY()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemigo"), gdjs.Untitled_32sceneCode.GDenemigoObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDenemigoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDenemigoObjects1[i].getBehavior("Physics2").applyPolarImpulse(-(90), 0.1, (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getBehavior("Physics2").getMassCenterX()), (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getBehavior("Physics2").getMassCenterY()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemigo"), gdjs.Untitled_32sceneCode.GDenemigoObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDenemigoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDenemigoObjects1[i].getBehavior("Physics2").applyPolarImpulse(180, 0.1, (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getBehavior("Physics2").getMassCenterX()), (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getBehavior("Physics2").getMassCenterY()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemigo"), gdjs.Untitled_32sceneCode.GDenemigoObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDenemigoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDenemigoObjects1[i].getBehavior("Physics2").applyPolarImpulse(0, 0.1, (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getBehavior("Physics2").getMassCenterX()), (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getBehavior("Physics2").getMassCenterY()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemigo"), gdjs.Untitled_32sceneCode.GDenemigoObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDenemigoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDenemigoObjects1[i].getBehavior("Physics2").applyPolarImpulse(90, 0.1, (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getBehavior("Physics2").getMassCenterX()), (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getBehavior("Physics2").getMassCenterY()));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDrealsoccerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDrealsoccerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDenemigoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDenemigoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDrealsoccerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDrealsoccerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDenemigoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDenemigoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
