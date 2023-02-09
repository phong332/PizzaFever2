var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointSpring' )
  var i541 = data
  i540.spring = i541[0]
  i540.damper = i541[1]
  i540.targetPosition = i541[2]
  return i540
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointMotor' )
  var i543 = data
  i542.m_TargetVelocity = i543[0]
  i542.m_Force = i543[1]
  i542.m_FreeSpin = i543[2]
  return i542
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointLimits' )
  var i545 = data
  i544.m_Min = i545[0]
  i544.m_Max = i545[1]
  i544.m_Bounciness = i545[2]
  i544.m_BounceMinVelocity = i545[3]
  i544.m_ContactDistance = i545[4]
  i544.minBounce = i545[5]
  i544.maxBounce = i545[6]
  return i544
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointDrive' )
  var i547 = data
  i546.m_PositionSpring = i547[0]
  i546.m_PositionDamper = i547[1]
  i546.m_MaximumForce = i547[2]
  return i546
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i549 = data
  i548.m_Spring = i549[0]
  i548.m_Damper = i549[1]
  return i548
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i551 = data
  i550.m_Limit = i551[0]
  i550.m_Bounciness = i551[1]
  i550.m_ContactDistance = i551[2]
  return i550
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i553 = data
  i552.m_ExtremumSlip = i553[0]
  i552.m_ExtremumValue = i553[1]
  i552.m_AsymptoteSlip = i553[2]
  i552.m_AsymptoteValue = i553[3]
  i552.m_Stiffness = i553[4]
  return i552
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i555 = data
  i554.m_LowerAngle = i555[0]
  i554.m_UpperAngle = i555[1]
  return i554
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i557 = data
  i556.m_MotorSpeed = i557[0]
  i556.m_MaximumMotorTorque = i557[1]
  return i556
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i559 = data
  i558.m_DampingRatio = i559[0]
  i558.m_Frequency = i559[1]
  i558.m_Angle = i559[2]
  return i558
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i561 = data
  i560.m_LowerTranslation = i561[0]
  i560.m_UpperTranslation = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i562 = root || new pc.UnityMaterial()
  var i563 = data
  i562.name = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'shader')
  i562.renderQueue = i563[3]
  i562.enableInstancing = !!i563[4]
  var i565 = i563[5]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i565[i + 0]) );
  }
  i562.floatParameters = i564
  var i567 = i563[6]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i567[i + 0]) );
  }
  i562.colorParameters = i566
  var i569 = i563[7]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i569[i + 0]) );
  }
  i562.vectorParameters = i568
  var i571 = i563[8]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i571[i + 0]) );
  }
  i562.textureParameters = i570
  var i573 = i563[9]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i573[i + 0]) );
  }
  i562.materialFlags = i572
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i577 = data
  i576.name = i577[0]
  i576.value = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i581 = data
  i580.name = i581[0]
  i580.value = new pc.Color(i581[1], i581[2], i581[3], i581[4])
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i585 = data
  i584.name = i585[0]
  i584.value = new pc.Vec4( i585[1], i585[2], i585[3], i585[4] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i589 = data
  i588.name = i589[0]
  request.r(i589[1], i589[2], 0, i588, 'value')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i593 = data
  i592.name = i593[0]
  i592.enabled = !!i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i595 = data
  i594.name = i595[0]
  i594.width = i595[1]
  i594.height = i595[2]
  i594.mipmapCount = i595[3]
  i594.anisoLevel = i595[4]
  i594.filterMode = i595[5]
  i594.hdr = !!i595[6]
  i594.format = i595[7]
  i594.wrapMode = i595[8]
  i594.alphaIsTransparency = !!i595[9]
  i594.alphaSource = i595[10]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i597 = data
  i596.name = i597[0]
  i596.halfPrecision = !!i597[1]
  i596.vertexCount = i597[2]
  i596.aabb = i597[3]
  var i599 = i597[4]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( !!i599[i + 0] );
  }
  i596.streams = i598
  i596.vertices = i597[5]
  var i601 = i597[6]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i601[i + 0]) );
  }
  i596.subMeshes = i600
  var i603 = i597[7]
  var i602 = []
  for(var i = 0; i < i603.length; i += 16) {
    i602.push( new pc.Mat4().setData(i603[i + 0], i603[i + 1], i603[i + 2], i603[i + 3],  i603[i + 4], i603[i + 5], i603[i + 6], i603[i + 7],  i603[i + 8], i603[i + 9], i603[i + 10], i603[i + 11],  i603[i + 12], i603[i + 13], i603[i + 14], i603[i + 15]) );
  }
  i596.bindposes = i602
  var i605 = i597[8]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i605[i + 0]) );
  }
  i596.blendShapes = i604
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i611 = data
  i610.triangles = i611[0]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i617 = data
  i616.name = i617[0]
  var i619 = i617[1]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i619[i + 0]) );
  }
  i616.frames = i618
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i621 = data
  i620.name = i621[0]
  i620.atlasId = i621[1]
  i620.mipmapCount = i621[2]
  i620.hdr = !!i621[3]
  i620.size = i621[4]
  i620.anisoLevel = i621[5]
  i620.filterMode = i621[6]
  i620.wrapMode = i621[7]
  var i623 = i621[8]
  var i622 = []
  for(var i = 0; i < i623.length; i += 4) {
    i622.push( UnityEngine.Rect.MinMaxRect(i623[i + 0], i623[i + 1], i623[i + 2], i623[i + 3]) );
  }
  i620.rects = i622
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i627 = data
  i626.name = i627[0]
  i626.index = i627[1]
  i626.startup = !!i627[2]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i629 = data
  i628.position = new pc.Vec3( i629[0], i629[1], i629[2] )
  i628.scale = new pc.Vec3( i629[3], i629[4], i629[5] )
  i628.rotation = new pc.Quat(i629[6], i629[7], i629[8], i629[9])
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i631 = data
  i630.enabled = !!i631[0]
  i630.aspect = i631[1]
  i630.orthographic = !!i631[2]
  i630.orthographicSize = i631[3]
  i630.backgroundColor = new pc.Color(i631[4], i631[5], i631[6], i631[7])
  i630.nearClipPlane = i631[8]
  i630.farClipPlane = i631[9]
  i630.fieldOfView = i631[10]
  i630.depth = i631[11]
  i630.clearFlags = i631[12]
  i630.cullingMask = i631[13]
  i630.rect = i631[14]
  request.r(i631[15], i631[16], 0, i630, 'targetTexture')
  return i630
}

Deserializers["CameraController"] = function (request, data, root) {
  var i632 = root || request.c( 'CameraController' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'targetObject')
  i632.offset = new pc.Vec3( i633[2], i633[3], i633[4] )
  i632.canFollow = !!i633[5]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i635 = data
  i634.name = i635[0]
  i634.tagId = i635[1]
  i634.enabled = !!i635[2]
  i634.isStatic = !!i635[3]
  i634.layer = i635[4]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i637 = data
  i636.enabled = !!i637[0]
  i636.type = i637[1]
  i636.color = new pc.Color(i637[2], i637[3], i637[4], i637[5])
  i636.cullingMask = i637[6]
  i636.intensity = i637[7]
  i636.range = i637[8]
  i636.spotAngle = i637[9]
  i636.shadows = i637[10]
  i636.shadowNormalBias = i637[11]
  i636.shadowBias = i637[12]
  i636.shadowStrength = i637[13]
  i636.shadowResolution = i637[14]
  i636.lightmapBakeType = i637[15]
  i636.renderMode = i637[16]
  request.r(i637[17], i637[18], 0, i636, 'cookie')
  i636.cookieSize = i637[19]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'sharedMesh')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'additionalVertexStreams')
  i640.enabled = !!i641[2]
  request.r(i641[3], i641[4], 0, i640, 'sharedMaterial')
  var i643 = i641[5]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.sharedMaterials = i642
  i640.receiveShadows = !!i641[6]
  i640.shadowCastingMode = i641[7]
  i640.sortingLayerID = i641[8]
  i640.sortingOrder = i641[9]
  i640.lightmapIndex = i641[10]
  i640.lightmapSceneIndex = i641[11]
  i640.lightmapScaleOffset = new pc.Vec4( i641[12], i641[13], i641[14], i641[15] )
  i640.lightProbeUsage = i641[16]
  i640.reflectionProbeUsage = i641[17]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i647 = data
  i646.enabled = !!i647[0]
  i646.isTrigger = !!i647[1]
  request.r(i647[2], i647[3], 0, i646, 'material')
  request.r(i647[4], i647[5], 0, i646, 'sharedMesh')
  i646.convex = !!i647[6]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i649 = data
  i648.center = new pc.Vec3( i649[0], i649[1], i649[2] )
  i648.size = new pc.Vec3( i649[3], i649[4], i649[5] )
  i648.enabled = !!i649[6]
  i648.isTrigger = !!i649[7]
  request.r(i649[8], i649[9], 0, i648, 'material')
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i651 = data
  i650.pivot = new pc.Vec2( i651[0], i651[1] )
  i650.anchorMin = new pc.Vec2( i651[2], i651[3] )
  i650.anchorMax = new pc.Vec2( i651[4], i651[5] )
  i650.sizeDelta = new pc.Vec2( i651[6], i651[7] )
  i650.anchoredPosition3D = new pc.Vec3( i651[8], i651[9], i651[10] )
  i650.rotation = new pc.Quat(i651[11], i651[12], i651[13], i651[14])
  i650.scale = new pc.Vec3( i651[15], i651[16], i651[17] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i653 = data
  i652.enabled = !!i653[0]
  i652.planeDistance = i653[1]
  i652.referencePixelsPerUnit = i653[2]
  i652.isFallbackOverlay = !!i653[3]
  i652.renderMode = i653[4]
  i652.renderOrder = i653[5]
  i652.sortingLayerName = i653[6]
  i652.sortingOrder = i653[7]
  i652.scaleFactor = i653[8]
  request.r(i653[9], i653[10], 0, i652, 'worldCamera')
  i652.overrideSorting = !!i653[11]
  i652.pixelPerfect = !!i653[12]
  i652.targetDisplay = i653[13]
  i652.overridePixelPerfect = !!i653[14]
  return i652
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i655 = data
  i654.m_IgnoreReversedGraphics = !!i655[0]
  i654.m_BlockingObjects = i655[1]
  i654.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i655[2] )
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i657 = data
  i656.cullTransparentMesh = !!i657[0]
  return i656
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Image' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_Sprite')
  i658.m_Type = i659[2]
  i658.m_PreserveAspect = !!i659[3]
  i658.m_FillCenter = !!i659[4]
  i658.m_FillMethod = i659[5]
  i658.m_FillAmount = i659[6]
  i658.m_FillClockwise = !!i659[7]
  i658.m_FillOrigin = i659[8]
  i658.m_UseSpriteMesh = !!i659[9]
  i658.m_PixelsPerUnitMultiplier = i659[10]
  request.r(i659[11], i659[12], 0, i658, 'm_Material')
  i658.m_Maskable = !!i659[13]
  i658.m_Color = new pc.Color(i659[14], i659[15], i659[16], i659[17])
  i658.m_RaycastTarget = !!i659[18]
  i658.m_RaycastPadding = new pc.Vec4( i659[19], i659[20], i659[21], i659[22] )
  return i658
}

Deserializers["UltimateJoystick"] = function (request, data, root) {
  var i660 = root || request.c( 'UltimateJoystick' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'joystick')
  request.r(i661[2], i661[3], 0, i660, 'joystickSizeFolder')
  request.r(i661[4], i661[5], 0, i660, 'joystickBase')
  request.r(i661[6], i661[7], 0, i660, 'highlightBase')
  request.r(i661[8], i661[9], 0, i660, 'highlightJoystick')
  request.r(i661[10], i661[11], 0, i660, 'tensionAccentUp')
  request.r(i661[12], i661[13], 0, i660, 'tensionAccentDown')
  request.r(i661[14], i661[15], 0, i660, 'tensionAccentLeft')
  request.r(i661[16], i661[17], 0, i660, 'tensionAccentRight')
  i660.scalingAxis = i661[18]
  i660.anchor = i661[19]
  i660.joystickTouchSize = i661[20]
  i660.joystickSize = i661[21]
  i660.radiusModifier = i661[22]
  i660.dynamicPositioning = !!i661[23]
  i660.customTouchSize_X = i661[24]
  i660.customTouchSize_Y = i661[25]
  i660.customTouchSizePos_X = i661[26]
  i660.customTouchSizePos_Y = i661[27]
  i660.customSpacing_X = i661[28]
  i660.customSpacing_Y = i661[29]
  i660.gravity = i661[30]
  i660.extendRadius = !!i661[31]
  i660.axis = i661[32]
  i660.boundary = i661[33]
  i660.tapCountOption = i661[34]
  i660.tapCountDuration = i661[35]
  i660.targetTapCount = i661[36]
  i660.deadZone = i661[37]
  i660.disableVisuals = !!i661[38]
  i660.useFade = !!i661[39]
  i660.fadeUntouched = i661[40]
  i660.fadeTouched = i661[41]
  i660.fadeInDuration = i661[42]
  i660.fadeOutDuration = i661[43]
  i660.useAnimation = !!i661[44]
  request.r(i661[45], i661[46], 0, i660, 'joystickAnimator')
  i660.showHighlight = !!i661[47]
  i660.highlightColor = new pc.Color(i661[48], i661[49], i661[50], i661[51])
  i660.showTension = !!i661[52]
  i660.tensionColorNone = new pc.Color(i661[53], i661[54], i661[55], i661[56])
  i660.tensionColorFull = new pc.Color(i661[57], i661[58], i661[59], i661[60])
  i660.joystickName = i661[61]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'animatorController')
  i662.updateMode = i663[2]
  var i665 = i663[3]
  var i664 = []
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 2, i664, '')
  }
  i662.humanBones = i664
  i662.enabled = !!i663[4]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i669 = data
  i668.m_Alpha = i669[0]
  i668.m_Interactable = !!i669[1]
  i668.m_BlocksRaycasts = !!i669[2]
  i668.m_IgnoreParentGroups = !!i669[3]
  i668.enabled = !!i669[4]
  return i668
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'm_FirstSelected')
  i670.m_sendNavigationEvents = !!i671[2]
  i670.m_DragThreshold = i671[3]
  return i670
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i673 = data
  i672.m_HorizontalAxis = i673[0]
  i672.m_VerticalAxis = i673[1]
  i672.m_SubmitButton = i673[2]
  i672.m_CancelButton = i673[3]
  i672.m_InputActionsPerSecond = i673[4]
  i672.m_RepeatDelay = i673[5]
  i672.m_ForceModuleActive = !!i673[6]
  return i672
}

Deserializers["GameManager2"] = function (request, data, root) {
  var i674 = root || request.c( 'GameManager2' )
  var i675 = data
  i674.endGame = !!i675[0]
  request.r(i675[1], i675[2], 0, i674, 'player')
  i674.totalMoney = i675[3]
  i674.countToEndcard = i675[4]
  request.r(i675[5], i675[6], 0, i674, 'canvasJoyStick')
  request.r(i675[7], i675[8], 0, i674, 'btnEndcard')
  request.r(i675[9], i675[10], 0, i674, 'guideMachine')
  request.r(i675[11], i675[12], 0, i674, 'guide')
  request.r(i675[13], i675[14], 0, i674, 'arrowGuideHolder')
  return i674
}

Deserializers["MachineController"] = function (request, data, root) {
  var i676 = root || request.c( 'MachineController' )
  var i677 = data
  var i679 = i677[0]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 1, i678, '')
  }
  i676.lstPizzaHolder = i678
  return i676
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i683 = data
  i682.m_UiScaleMode = i683[0]
  i682.m_ReferencePixelsPerUnit = i683[1]
  i682.m_ScaleFactor = i683[2]
  i682.m_ReferenceResolution = new pc.Vec2( i683[3], i683[4] )
  i682.m_ScreenMatchMode = i683[5]
  i682.m_MatchWidthOrHeight = i683[6]
  i682.m_PhysicalUnit = i683[7]
  i682.m_FallbackScreenDPI = i683[8]
  i682.m_DefaultSpriteDPI = i683[9]
  i682.m_DynamicPixelsPerUnit = i683[10]
  i682.m_PresetInfoIsWorld = !!i683[11]
  return i682
}

Deserializers["LookAtCam"] = function (request, data, root) {
  var i684 = root || request.c( 'LookAtCam' )
  var i685 = data
  return i684
}

Deserializers["TableRegion"] = function (request, data, root) {
  var i686 = root || request.c( 'TableRegion' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'guest')
  i686.numberPizza = i687[2]
  request.r(i687[3], i687[4], 0, i686, 'foodHolder')
  return i686
}

Deserializers["GuestController"] = function (request, data, root) {
  var i688 = root || request.c( 'GuestController' )
  var i689 = data
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i691 = data
  i690.enabled = !!i691[0]
  request.r(i691[1], i691[2], 0, i690, 'sharedMaterial')
  var i693 = i691[3]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i690.sharedMaterials = i692
  i690.receiveShadows = !!i691[4]
  i690.shadowCastingMode = i691[5]
  i690.sortingLayerID = i691[6]
  i690.sortingOrder = i691[7]
  i690.lightmapIndex = i691[8]
  i690.lightmapSceneIndex = i691[9]
  i690.lightmapScaleOffset = new pc.Vec4( i691[10], i691[11], i691[12], i691[13] )
  i690.lightProbeUsage = i691[14]
  i690.reflectionProbeUsage = i691[15]
  request.r(i691[16], i691[17], 0, i690, 'sharedMesh')
  var i695 = i691[18]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i690.bones = i694
  i690.updateWhenOffscreen = !!i691[19]
  i690.localBounds = i691[20]
  request.r(i691[21], i691[22], 0, i690, 'rootBone')
  var i697 = i691[23]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i697[i + 0]) );
  }
  i690.blendShapesWeights = i696
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i701 = data
  i700.weight = i701[0]
  return i700
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i702 = root || request.c( 'SoundManager' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'crashMoney')
  request.r(i703[2], i703[3], 0, i702, 'unlock')
  request.r(i703[4], i703[5], 0, i702, 'region')
  request.r(i703[6], i703[7], 0, i702, 'audioSource')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'clip')
  request.r(i705[2], i705[3], 0, i704, 'outputAudioMixerGroup')
  i704.playOnAwake = !!i705[4]
  i704.loop = !!i705[5]
  i704.time = i705[6]
  i704.volume = i705[7]
  i704.pitch = i705[8]
  i704.enabled = !!i705[9]
  return i704
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i706 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i707 = data
  i706.m_hasFontAssetChanged = !!i707[0]
  request.r(i707[1], i707[2], 0, i706, 'm_baseMaterial')
  i706.m_maskOffset = new pc.Vec4( i707[3], i707[4], i707[5], i707[6] )
  i706.m_text = i707[7]
  i706.m_isRightToLeft = !!i707[8]
  request.r(i707[9], i707[10], 0, i706, 'm_fontAsset')
  request.r(i707[11], i707[12], 0, i706, 'm_sharedMaterial')
  var i709 = i707[13]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.m_fontSharedMaterials = i708
  request.r(i707[14], i707[15], 0, i706, 'm_fontMaterial')
  var i711 = i707[16]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i706.m_fontMaterials = i710
  i706.m_fontColor32 = UnityEngine.Color32.ConstructColor(i707[17], i707[18], i707[19], i707[20])
  i706.m_fontColor = new pc.Color(i707[21], i707[22], i707[23], i707[24])
  i706.m_enableVertexGradient = !!i707[25]
  i706.m_colorMode = i707[26]
  i706.m_fontColorGradient = request.d('TMPro.VertexGradient', i707[27], i706.m_fontColorGradient)
  request.r(i707[28], i707[29], 0, i706, 'm_fontColorGradientPreset')
  request.r(i707[30], i707[31], 0, i706, 'm_spriteAsset')
  i706.m_tintAllSprites = !!i707[32]
  request.r(i707[33], i707[34], 0, i706, 'm_StyleSheet')
  i706.m_TextStyleHashCode = i707[35]
  i706.m_overrideHtmlColors = !!i707[36]
  i706.m_faceColor = UnityEngine.Color32.ConstructColor(i707[37], i707[38], i707[39], i707[40])
  i706.m_fontSize = i707[41]
  i706.m_fontSizeBase = i707[42]
  i706.m_fontWeight = i707[43]
  i706.m_enableAutoSizing = !!i707[44]
  i706.m_fontSizeMin = i707[45]
  i706.m_fontSizeMax = i707[46]
  i706.m_fontStyle = i707[47]
  i706.m_HorizontalAlignment = i707[48]
  i706.m_VerticalAlignment = i707[49]
  i706.m_textAlignment = i707[50]
  i706.m_characterSpacing = i707[51]
  i706.m_wordSpacing = i707[52]
  i706.m_lineSpacing = i707[53]
  i706.m_lineSpacingMax = i707[54]
  i706.m_paragraphSpacing = i707[55]
  i706.m_charWidthMaxAdj = i707[56]
  i706.m_enableWordWrapping = !!i707[57]
  i706.m_wordWrappingRatios = i707[58]
  i706.m_overflowMode = i707[59]
  request.r(i707[60], i707[61], 0, i706, 'm_linkedTextComponent')
  request.r(i707[62], i707[63], 0, i706, 'parentLinkedComponent')
  i706.m_enableKerning = !!i707[64]
  i706.m_enableExtraPadding = !!i707[65]
  i706.checkPaddingRequired = !!i707[66]
  i706.m_isRichText = !!i707[67]
  i706.m_parseCtrlCharacters = !!i707[68]
  i706.m_isOrthographic = !!i707[69]
  i706.m_isCullingEnabled = !!i707[70]
  i706.m_horizontalMapping = i707[71]
  i706.m_verticalMapping = i707[72]
  i706.m_uvLineOffset = i707[73]
  i706.m_geometrySortingOrder = i707[74]
  i706.m_IsTextObjectScaleStatic = !!i707[75]
  i706.m_VertexBufferAutoSizeReduction = !!i707[76]
  i706.m_useMaxVisibleDescender = !!i707[77]
  i706.m_pageToDisplay = i707[78]
  i706.m_margin = new pc.Vec4( i707[79], i707[80], i707[81], i707[82] )
  i706.m_isUsingLegacyAnimationComponent = !!i707[83]
  i706.m_isVolumetricText = !!i707[84]
  request.r(i707[85], i707[86], 0, i706, 'm_Material')
  i706.m_Maskable = !!i707[87]
  i706.m_Color = new pc.Color(i707[88], i707[89], i707[90], i707[91])
  i706.m_RaycastTarget = !!i707[92]
  i706.m_RaycastPadding = new pc.Vec4( i707[93], i707[94], i707[95], i707[96] )
  return i706
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i712 = root || request.c( 'TMPro.VertexGradient' )
  var i713 = data
  i712.topLeft = new pc.Color(i713[0], i713[1], i713[2], i713[3])
  i712.topRight = new pc.Color(i713[4], i713[5], i713[6], i713[7])
  i712.bottomLeft = new pc.Color(i713[8], i713[9], i713[10], i713[11])
  i712.bottomRight = new pc.Color(i713[12], i713[13], i713[14], i713[15])
  return i712
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.Button' )
  var i715 = data
  i714.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i715[0], i714.m_OnClick)
  i714.m_Navigation = request.d('UnityEngine.UI.Navigation', i715[1], i714.m_Navigation)
  i714.m_Transition = i715[2]
  i714.m_Colors = request.d('UnityEngine.UI.ColorBlock', i715[3], i714.m_Colors)
  i714.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i715[4], i714.m_SpriteState)
  i714.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i715[5], i714.m_AnimationTriggers)
  i714.m_Interactable = !!i715[6]
  request.r(i715[7], i715[8], 0, i714, 'm_TargetGraphic')
  return i714
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i717 = data
  i716.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i717[0], i716.m_PersistentCalls)
  return i716
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i719 = data
  var i721 = i719[0]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(request.d('UnityEngine.Events.PersistentCall', i721[i + 0]));
  }
  i718.m_Calls = i720
  return i718
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'm_Target')
  i724.m_TargetAssemblyTypeName = i725[2]
  i724.m_MethodName = i725[3]
  i724.m_Mode = i725[4]
  i724.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i725[5], i724.m_Arguments)
  i724.m_CallState = i725[6]
  return i724
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_ObjectArgument')
  i726.m_ObjectArgumentAssemblyTypeName = i727[2]
  i726.m_IntArgument = i727[3]
  i726.m_FloatArgument = i727[4]
  i726.m_StringArgument = i727[5]
  i726.m_BoolArgument = !!i727[6]
  return i726
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i729 = data
  i728.m_Mode = i729[0]
  i728.m_WrapAround = !!i729[1]
  request.r(i729[2], i729[3], 0, i728, 'm_SelectOnUp')
  request.r(i729[4], i729[5], 0, i728, 'm_SelectOnDown')
  request.r(i729[6], i729[7], 0, i728, 'm_SelectOnLeft')
  request.r(i729[8], i729[9], 0, i728, 'm_SelectOnRight')
  return i728
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i731 = data
  i730.m_NormalColor = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  i730.m_HighlightedColor = new pc.Color(i731[4], i731[5], i731[6], i731[7])
  i730.m_PressedColor = new pc.Color(i731[8], i731[9], i731[10], i731[11])
  i730.m_SelectedColor = new pc.Color(i731[12], i731[13], i731[14], i731[15])
  i730.m_DisabledColor = new pc.Color(i731[16], i731[17], i731[18], i731[19])
  i730.m_ColorMultiplier = i731[20]
  i730.m_FadeDuration = i731[21]
  return i730
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_HighlightedSprite')
  request.r(i733[2], i733[3], 0, i732, 'm_PressedSprite')
  request.r(i733[4], i733[5], 0, i732, 'm_SelectedSprite')
  request.r(i733[6], i733[7], 0, i732, 'm_DisabledSprite')
  return i732
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i735 = data
  i734.m_NormalTrigger = i735[0]
  i734.m_HighlightedTrigger = i735[1]
  i734.m_PressedTrigger = i735[2]
  i734.m_SelectedTrigger = i735[3]
  i734.m_DisabledTrigger = i735[4]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i737 = data
  i736.mass = i737[0]
  i736.drag = i737[1]
  i736.angularDrag = i737[2]
  i736.useGravity = !!i737[3]
  i736.isKinematic = !!i737[4]
  i736.constraints = i737[5]
  i736.maxAngularVelocity = i737[6]
  i736.collisionDetectionMode = i737[7]
  i736.interpolation = i737[8]
  return i736
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i738 = root || request.c( 'PlayerController' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'animator')
  i738.startTouch = !!i739[2]
  i738.playSoundRun = !!i739[3]
  i738.canMove = !!i739[4]
  request.r(i739[5], i739[6], 0, i738, 'rigid')
  request.r(i739[7], i739[8], 0, i738, 'foodHolder')
  request.r(i739[9], i739[10], 0, i738, 'foodHolderOnTable')
  i738.speed = i739[11]
  i738.rotationSpeed = i739[12]
  i738.timeReleaseBrick = i739[13]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i741 = data
  i740.enabled = !!i741[0]
  request.r(i741[1], i741[2], 0, i740, 'sharedMaterial')
  var i743 = i741[3]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.sharedMaterials = i742
  i740.receiveShadows = !!i741[4]
  i740.shadowCastingMode = i741[5]
  i740.sortingLayerID = i741[6]
  i740.sortingOrder = i741[7]
  i740.lightmapIndex = i741[8]
  i740.lightmapSceneIndex = i741[9]
  i740.lightmapScaleOffset = new pc.Vec4( i741[10], i741[11], i741[12], i741[13] )
  i740.lightProbeUsage = i741[14]
  i740.reflectionProbeUsage = i741[15]
  i740.color = new pc.Color(i741[16], i741[17], i741[18], i741[19])
  request.r(i741[20], i741[21], 0, i740, 'sprite')
  i740.flipX = !!i741[22]
  i740.flipY = !!i741[23]
  i740.drawMode = i741[24]
  i740.size = new pc.Vec2( i741[25], i741[26] )
  i740.tileMode = i741[27]
  i740.adaptiveModeThreshold = i741[28]
  i740.maskInteraction = i741[29]
  i740.spriteSortPoint = i741[30]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i745 = data
  i744.ambientIntensity = i745[0]
  i744.reflectionIntensity = i745[1]
  i744.ambientMode = i745[2]
  i744.ambientLight = new pc.Color(i745[3], i745[4], i745[5], i745[6])
  i744.ambientSkyColor = new pc.Color(i745[7], i745[8], i745[9], i745[10])
  i744.ambientGroundColor = new pc.Color(i745[11], i745[12], i745[13], i745[14])
  i744.ambientEquatorColor = new pc.Color(i745[15], i745[16], i745[17], i745[18])
  i744.fogColor = new pc.Color(i745[19], i745[20], i745[21], i745[22])
  i744.fogEndDistance = i745[23]
  i744.fogStartDistance = i745[24]
  i744.fogDensity = i745[25]
  i744.fog = !!i745[26]
  request.r(i745[27], i745[28], 0, i744, 'skybox')
  i744.fogMode = i745[29]
  var i747 = i745[30]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i747[i + 0]) );
  }
  i744.lightmaps = i746
  i744.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i745[31], i744.lightProbes)
  i744.lightmapsMode = i745[32]
  i744.environmentLightingMode = i745[33]
  i744.ambientProbe = new pc.SphericalHarmonicsL2(i745[34])
  i744.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i745[35])
  i744.useReferenceAmbientProbe = !!i745[36]
  request.r(i745[37], i745[38], 0, i744, 'customReflection')
  request.r(i745[39], i745[40], 0, i744, 'defaultReflection')
  i744.defaultReflectionMode = i745[41]
  i744.defaultReflectionResolution = i745[42]
  i744.sunLightObjectId = i745[43]
  i744.pixelLightCount = i745[44]
  i744.defaultReflectionHDR = !!i745[45]
  i744.hasLightDataAsset = !!i745[46]
  i744.hasManualGenerate = !!i745[47]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'lightmapColor')
  request.r(i751[2], i751[3], 0, i750, 'lightmapDirection')
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i752 = root || new UnityEngine.LightProbes()
  var i753 = data
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i761 = data
  var i763 = i761[0]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(i763[i + 0]);
  }
  i760.invalidShaderVariants = i762
  i760.name = i761[1]
  i760.guid = i761[2]
  var i765 = i761[3]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i760.shaderDefinedKeywords = i764
  var i767 = i761[4]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i767[i + 0]) );
  }
  i760.passes = i766
  var i769 = i761[5]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i769[i + 0]) );
  }
  i760.usePasses = i768
  var i771 = i761[6]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i771[i + 0]) );
  }
  i760.defaultParameterValues = i770
  request.r(i761[7], i761[8], 0, i760, 'unityFallbackShader')
  i760.readDepth = !!i761[9]
  i760.isCreatedByShaderGraph = !!i761[10]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i778 = root || new pc.UnityShaderPass()
  var i779 = data
  i778.id = i779[0]
  i778.subShaderIndex = i779[1]
  i778.name = i779[2]
  i778.passType = i779[3]
  i778.usePass = !!i779[4]
  i778.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[5], i778.zTest)
  i778.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[6], i778.zWrite)
  i778.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[7], i778.culling)
  i778.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i779[8], i778.blending)
  i778.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i779[9], i778.alphaBlending)
  i778.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[10], i778.colorWriteMask)
  i778.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[11], i778.offsetUnits)
  i778.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[12], i778.offsetFactor)
  i778.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[13], i778.stencilRef)
  i778.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[14], i778.stencilReadMask)
  i778.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[15], i778.stencilWriteMask)
  i778.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i779[16], i778.stencilOp)
  i778.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i779[17], i778.stencilOpFront)
  i778.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i779[18], i778.stencilOpBack)
  var i781 = i779[19]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i781[i + 0]) );
  }
  i778.tags = i780
  var i783 = i779[20]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i778.passDefinedKeywords = i782
  var i785 = i779[21]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i785[i + 0]) );
  }
  i778.passDefinedKeywordGroups = i784
  var i787 = i779[22]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i787[i + 0]) );
  }
  i778.variants = i786
  var i789 = i779[23]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i789[i + 0]) );
  }
  i778.excludedVariants = i788
  i778.hasDepthReader = !!i779[24]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i791 = data
  i790.val = i791[0]
  i790.name = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i793 = data
  i792.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[0], i792.src)
  i792.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[1], i792.dst)
  i792.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[2], i792.op)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i795 = data
  i794.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[0], i794.pass)
  i794.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[1], i794.fail)
  i794.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[2], i794.zFail)
  i794.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[3], i794.comp)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i799 = data
  i798.name = i799[0]
  i798.value = i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i803 = data
  var i805 = i803[0]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i802.keywords = i804
  i802.hasDiscard = !!i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i809 = data
  i808.passId = i809[0]
  i808.subShaderIndex = i809[1]
  var i811 = i809[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i808.keywords = i810
  i808.vertexProgram = i809[3]
  i808.fragmentProgram = i809[4]
  i808.readDepth = !!i809[5]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'shader')
  i814.pass = i815[2]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i819 = data
  i818.name = i819[0]
  i818.type = i819[1]
  i818.value = new pc.Vec4( i819[2], i819[3], i819[4], i819[5] )
  i818.textureValue = i819[6]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i821 = data
  i820.name = i821[0]
  request.r(i821[1], i821[2], 0, i820, 'texture')
  i820.aabb = i821[3]
  i820.vertices = i821[4]
  i820.triangles = i821[5]
  i820.textureRect = UnityEngine.Rect.MinMaxRect(i821[6], i821[7], i821[8], i821[9])
  i820.packedRect = UnityEngine.Rect.MinMaxRect(i821[10], i821[11], i821[12], i821[13])
  i820.border = new pc.Vec4( i821[14], i821[15], i821[16], i821[17] )
  i820.transparency = i821[18]
  i820.bounds = i821[19]
  i820.pixelsPerUnit = i821[20]
  i820.textureWidth = i821[21]
  i820.textureHeight = i821[22]
  i820.nativeSize = new pc.Vec2( i821[23], i821[24] )
  i820.pivot = new pc.Vec2( i821[25], i821[26] )
  i820.textureRectOffset = new pc.Vec2( i821[27], i821[28] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i823 = data
  i822.name = i823[0]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i825 = data
  i824.name = i825[0]
  i824.wrapMode = i825[1]
  i824.isLooping = !!i825[2]
  i824.length = i825[3]
  var i827 = i825[4]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i827[i + 0]) );
  }
  i824.curves = i826
  var i829 = i825[5]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i829[i + 0]) );
  }
  i824.events = i828
  i824.halfPrecision = !!i825[6]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i833 = data
  i832.path = i833[0]
  i832.componentType = i833[1]
  i832.property = i833[2]
  i832.keys = i833[3]
  var i835 = i833[4]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i835[i + 0]) );
  }
  i832.objectReferenceKeys = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i839 = data
  i838.time = i839[0]
  request.r(i839[1], i839[2], 0, i838, 'value')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i843 = data
  i842.functionName = i843[0]
  i842.floatParameter = i843[1]
  i842.intParameter = i843[2]
  i842.stringParameter = i843[3]
  request.r(i843[4], i843[5], 0, i842, 'objectReferenceParameter')
  i842.time = i843[6]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i845 = data
  i844.name = i845[0]
  i844.ascent = i845[1]
  i844.originalLineHeight = i845[2]
  i844.fontSize = i845[3]
  var i847 = i845[4]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i847[i + 0]) );
  }
  i844.characterInfo = i846
  request.r(i845[5], i845[6], 0, i844, 'texture')
  i844.originalFontSize = i845[7]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i851 = data
  i850.index = i851[0]
  i850.advance = i851[1]
  i850.bearing = i851[2]
  i850.glyphWidth = i851[3]
  i850.glyphHeight = i851[4]
  i850.minX = i851[5]
  i850.maxX = i851[6]
  i850.minY = i851[7]
  i850.maxY = i851[8]
  i850.uvBottomLeftX = i851[9]
  i850.uvBottomLeftY = i851[10]
  i850.uvBottomRightX = i851[11]
  i850.uvBottomRightY = i851[12]
  i850.uvTopLeftX = i851[13]
  i850.uvTopLeftY = i851[14]
  i850.uvTopRightX = i851[15]
  i850.uvTopRightY = i851[16]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i853 = data
  i852.name = i853[0]
  var i855 = i853[1]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i855[i + 0]) );
  }
  i852.states = i854
  var i857 = i853[2]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i857[i + 0]) );
  }
  i852.layers = i856
  var i859 = i853[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i859[i + 0]) );
  }
  i852.parameters = i858
  i852.animationClips = i853[4]
  i852.HasSubStateMachines = !!i853[5]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i863 = data
  i862.cycleOffset = i863[0]
  i862.cycleOffsetParameter = i863[1]
  i862.cycleOffsetParameterActive = !!i863[2]
  i862.mirror = !!i863[3]
  i862.mirrorParameter = i863[4]
  i862.mirrorParameterActive = !!i863[5]
  i862.motionId = i863[6]
  i862.nameHash = i863[7]
  i862.fullPathHash = i863[8]
  i862.speed = i863[9]
  i862.speedParameter = i863[10]
  i862.speedParameterActive = !!i863[11]
  i862.tag = i863[12]
  i862.name = i863[13]
  i862.layer = i863[14]
  i862.writeDefaultValues = !!i863[15]
  var i865 = i863[16]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i865[i + 0]) );
  }
  i862.transitions = i864
  var i867 = i863[17]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i862.behaviours = i866
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i871 = data
  i870.fullPath = i871[0]
  i870.canTransitionToSelf = !!i871[1]
  i870.duration = i871[2]
  i870.exitTime = i871[3]
  i870.hasExitTime = !!i871[4]
  i870.hasFixedDuration = !!i871[5]
  i870.interruptionSource = i871[6]
  i870.offset = i871[7]
  i870.orderedInterruption = !!i871[8]
  i870.destinationStateNameHash = i871[9]
  i870.destinationStateMachineId = i871[10]
  i870.isExit = !!i871[11]
  i870.mute = !!i871[12]
  i870.solo = !!i871[13]
  var i873 = i871[14]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i873[i + 0]) );
  }
  i870.conditions = i872
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i877 = data
  i876.mode = i877[0]
  i876.parameter = i877[1]
  i876.threshold = i877[2]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i883 = data
  i882.blendingMode = i883[0]
  i882.defaultWeight = i883[1]
  i882.name = i883[2]
  i882.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i883[3], i882.stateMachine)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i885 = data
  i884.id = i885[0]
  i884.defaultStateNameHash = i885[1]
  var i887 = i885[2]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i887[i + 0]) );
  }
  i884.entryTransitions = i886
  var i889 = i885[3]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i889[i + 0]) );
  }
  i884.anyStateTransitions = i888
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i893 = data
  i892.destinationStateNameHash = i893[0]
  i892.destinationStateMachineId = i893[1]
  i892.isExit = !!i893[2]
  i892.mute = !!i893[3]
  i892.solo = !!i893[4]
  var i895 = i893[5]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i895[i + 0]) );
  }
  i892.conditions = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i899 = data
  i898.defaultBool = !!i899[0]
  i898.defaultFloat = i899[1]
  i898.defaultInt = i899[2]
  i898.name = i899[3]
  i898.nameHash = i899[4]
  i898.type = i899[5]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i901 = data
  i900.name = i901[0]
  i900.bytes64 = i901[1]
  i900.data = i901[2]
  return i900
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i903 = data
  i902.hashCode = i903[0]
  request.r(i903[1], i903[2], 0, i902, 'material')
  i902.materialHashCode = i903[3]
  request.r(i903[4], i903[5], 0, i902, 'atlas')
  i902.normalStyle = i903[6]
  i902.normalSpacingOffset = i903[7]
  i902.boldStyle = i903[8]
  i902.boldSpacing = i903[9]
  i902.italicStyle = i903[10]
  i902.tabSize = i903[11]
  i902.m_Version = i903[12]
  i902.m_SourceFontFileGUID = i903[13]
  request.r(i903[14], i903[15], 0, i902, 'm_SourceFontFile_EditorRef')
  request.r(i903[16], i903[17], 0, i902, 'm_SourceFontFile')
  i902.m_AtlasPopulationMode = i903[18]
  i902.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i903[19], i902.m_FaceInfo)
  var i905 = i903[20]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('UnityEngine.TextCore.Glyph', i905[i + 0]));
  }
  i902.m_GlyphTable = i904
  var i907 = i903[21]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('TMPro.TMP_Character', i907[i + 0]));
  }
  i902.m_CharacterTable = i906
  var i909 = i903[22]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i902.m_AtlasTextures = i908
  i902.m_AtlasTextureIndex = i903[23]
  i902.m_IsMultiAtlasTexturesEnabled = !!i903[24]
  i902.m_ClearDynamicDataOnBuild = !!i903[25]
  var i911 = i903[26]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('UnityEngine.TextCore.GlyphRect', i911[i + 0]));
  }
  i902.m_UsedGlyphRects = i910
  var i913 = i903[27]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i913.length; i += 1) {
    i912.add(request.d('UnityEngine.TextCore.GlyphRect', i913[i + 0]));
  }
  i902.m_FreeGlyphRects = i912
  i902.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i903[28], i902.m_fontInfo)
  i902.m_AtlasWidth = i903[29]
  i902.m_AtlasHeight = i903[30]
  i902.m_AtlasPadding = i903[31]
  i902.m_AtlasRenderMode = i903[32]
  var i915 = i903[33]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('TMPro.TMP_Glyph', i915[i + 0]));
  }
  i902.m_glyphInfoList = i914
  i902.m_KerningTable = request.d('TMPro.KerningTable', i903[34], i902.m_KerningTable)
  i902.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i903[35], i902.m_FontFeatureTable)
  var i917 = i903[36]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 1, i916, '')
  }
  i902.fallbackFontAssets = i916
  var i919 = i903[37]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 1, i918, '')
  }
  i902.m_FallbackFontAssetTable = i918
  i902.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i903[38], i902.m_CreationSettings)
  var i921 = i903[39]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('TMPro.TMP_FontWeightPair', i921[i + 0]) );
  }
  i902.m_FontWeightTable = i920
  var i923 = i903[40]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('TMPro.TMP_FontWeightPair', i923[i + 0]) );
  }
  i902.fontWeights = i922
  return i902
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i925 = data
  i924.m_FaceIndex = i925[0]
  i924.m_FamilyName = i925[1]
  i924.m_StyleName = i925[2]
  i924.m_PointSize = i925[3]
  i924.m_Scale = i925[4]
  i924.m_LineHeight = i925[5]
  i924.m_AscentLine = i925[6]
  i924.m_CapLine = i925[7]
  i924.m_MeanLine = i925[8]
  i924.m_Baseline = i925[9]
  i924.m_DescentLine = i925[10]
  i924.m_SuperscriptOffset = i925[11]
  i924.m_SuperscriptSize = i925[12]
  i924.m_SubscriptOffset = i925[13]
  i924.m_SubscriptSize = i925[14]
  i924.m_UnderlineOffset = i925[15]
  i924.m_UnderlineThickness = i925[16]
  i924.m_StrikethroughOffset = i925[17]
  i924.m_StrikethroughThickness = i925[18]
  i924.m_TabWidth = i925[19]
  return i924
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i929 = data
  i928.m_Index = i929[0]
  i928.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i929[1], i928.m_Metrics)
  i928.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i929[2], i928.m_GlyphRect)
  i928.m_Scale = i929[3]
  i928.m_AtlasIndex = i929[4]
  return i928
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i931 = data
  i930.m_Width = i931[0]
  i930.m_Height = i931[1]
  i930.m_HorizontalBearingX = i931[2]
  i930.m_HorizontalBearingY = i931[3]
  i930.m_HorizontalAdvance = i931[4]
  return i930
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i933 = data
  i932.m_X = i933[0]
  i932.m_Y = i933[1]
  i932.m_Width = i933[2]
  i932.m_Height = i933[3]
  return i932
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.TMP_Character' )
  var i937 = data
  i936.m_ElementType = i937[0]
  i936.m_Unicode = i937[1]
  i936.m_GlyphIndex = i937[2]
  i936.m_Scale = i937[3]
  return i936
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i943 = data
  i942.Name = i943[0]
  i942.PointSize = i943[1]
  i942.Scale = i943[2]
  i942.CharacterCount = i943[3]
  i942.LineHeight = i943[4]
  i942.Baseline = i943[5]
  i942.Ascender = i943[6]
  i942.CapHeight = i943[7]
  i942.Descender = i943[8]
  i942.CenterLine = i943[9]
  i942.SuperscriptOffset = i943[10]
  i942.SubscriptOffset = i943[11]
  i942.SubSize = i943[12]
  i942.Underline = i943[13]
  i942.UnderlineThickness = i943[14]
  i942.strikethrough = i943[15]
  i942.strikethroughThickness = i943[16]
  i942.TabWidth = i943[17]
  i942.Padding = i943[18]
  i942.AtlasWidth = i943[19]
  i942.AtlasHeight = i943[20]
  return i942
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_Glyph' )
  var i947 = data
  i946.id = i947[0]
  i946.x = i947[1]
  i946.y = i947[2]
  i946.width = i947[3]
  i946.height = i947[4]
  i946.xOffset = i947[5]
  i946.yOffset = i947[6]
  i946.xAdvance = i947[7]
  i946.scale = i947[8]
  return i946
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.KerningTable' )
  var i949 = data
  var i951 = i949[0]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('TMPro.KerningPair', i951[i + 0]));
  }
  i948.kerningPairs = i950
  return i948
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.KerningPair' )
  var i955 = data
  i954.xOffset = i955[0]
  i954.m_FirstGlyph = i955[1]
  i954.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i955[2], i954.m_FirstGlyphAdjustments)
  i954.m_SecondGlyph = i955[3]
  i954.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i955[4], i954.m_SecondGlyphAdjustments)
  i954.m_IgnoreSpacingAdjustments = !!i955[5]
  return i954
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i957 = data
  var i959 = i957[0]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i959[i + 0]));
  }
  i956.m_GlyphPairAdjustmentRecords = i958
  return i956
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i963 = data
  i962.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i963[0], i962.m_FirstAdjustmentRecord)
  i962.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i963[1], i962.m_SecondAdjustmentRecord)
  i962.m_FeatureLookupFlags = i963[2]
  return i962
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i967 = data
  i966.sourceFontFileName = i967[0]
  i966.sourceFontFileGUID = i967[1]
  i966.pointSizeSamplingMode = i967[2]
  i966.pointSize = i967[3]
  i966.padding = i967[4]
  i966.packingMode = i967[5]
  i966.atlasWidth = i967[6]
  i966.atlasHeight = i967[7]
  i966.characterSetSelectionMode = i967[8]
  i966.characterSequence = i967[9]
  i966.referencedFontAssetGUID = i967[10]
  i966.referencedTextAssetGUID = i967[11]
  i966.fontStyle = i967[12]
  i966.fontStyleModifier = i967[13]
  i966.renderMode = i967[14]
  i966.includeFontFeatures = !!i967[15]
  return i966
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'regularTypeface')
  request.r(i971[2], i971[3], 0, i970, 'italicTypeface')
  return i970
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i972 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i973 = data
  i972.useSafeMode = !!i973[0]
  i972.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i973[1], i972.safeModeOptions)
  i972.timeScale = i973[2]
  i972.useSmoothDeltaTime = !!i973[3]
  i972.maxSmoothUnscaledTime = i973[4]
  i972.rewindCallbackMode = i973[5]
  i972.showUnityEditorReport = !!i973[6]
  i972.logBehaviour = i973[7]
  i972.drawGizmos = !!i973[8]
  i972.defaultRecyclable = !!i973[9]
  i972.defaultAutoPlay = i973[10]
  i972.defaultUpdateType = i973[11]
  i972.defaultTimeScaleIndependent = !!i973[12]
  i972.defaultEaseType = i973[13]
  i972.defaultEaseOvershootOrAmplitude = i973[14]
  i972.defaultEasePeriod = i973[15]
  i972.defaultAutoKill = !!i973[16]
  i972.defaultLoopType = i973[17]
  i972.debugMode = !!i973[18]
  i972.debugStoreTargetId = !!i973[19]
  i972.showPreviewPanel = !!i973[20]
  i972.storeSettingsLocation = i973[21]
  i972.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i973[22], i972.modules)
  i972.createASMDEF = !!i973[23]
  i972.showPlayingTweens = !!i973[24]
  i972.showPausedTweens = !!i973[25]
  return i972
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i974 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i975 = data
  i974.logBehaviour = i975[0]
  i974.nestedTweenFailureBehaviour = i975[1]
  return i974
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i976 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i977 = data
  i976.showPanel = !!i977[0]
  i976.audioEnabled = !!i977[1]
  i976.physicsEnabled = !!i977[2]
  i976.physics2DEnabled = !!i977[3]
  i976.spriteEnabled = !!i977[4]
  i976.uiEnabled = !!i977[5]
  i976.textMeshProEnabled = !!i977[6]
  i976.tk2DEnabled = !!i977[7]
  i976.deAudioEnabled = !!i977[8]
  i976.deUnityExtendedEnabled = !!i977[9]
  i976.epoOutlineEnabled = !!i977[10]
  return i976
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_Settings' )
  var i979 = data
  i978.m_enableWordWrapping = !!i979[0]
  i978.m_enableKerning = !!i979[1]
  i978.m_enableExtraPadding = !!i979[2]
  i978.m_enableTintAllSprites = !!i979[3]
  i978.m_enableParseEscapeCharacters = !!i979[4]
  i978.m_EnableRaycastTarget = !!i979[5]
  i978.m_GetFontFeaturesAtRuntime = !!i979[6]
  i978.m_missingGlyphCharacter = i979[7]
  i978.m_warningsDisabled = !!i979[8]
  request.r(i979[9], i979[10], 0, i978, 'm_defaultFontAsset')
  i978.m_defaultFontAssetPath = i979[11]
  i978.m_defaultFontSize = i979[12]
  i978.m_defaultAutoSizeMinRatio = i979[13]
  i978.m_defaultAutoSizeMaxRatio = i979[14]
  i978.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i979[15], i979[16] )
  i978.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i979[17], i979[18] )
  i978.m_autoSizeTextContainer = !!i979[19]
  i978.m_IsTextObjectScaleStatic = !!i979[20]
  var i981 = i979[21]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 1, i980, '')
  }
  i978.m_fallbackFontAssets = i980
  i978.m_matchMaterialPreset = !!i979[22]
  request.r(i979[23], i979[24], 0, i978, 'm_defaultSpriteAsset')
  i978.m_defaultSpriteAssetPath = i979[25]
  i978.m_enableEmojiSupport = !!i979[26]
  i978.m_MissingCharacterSpriteUnicode = i979[27]
  i978.m_defaultColorGradientPresetsPath = i979[28]
  request.r(i979[29], i979[30], 0, i978, 'm_defaultStyleSheet')
  i978.m_StyleSheetsResourcePath = i979[31]
  request.r(i979[32], i979[33], 0, i978, 'm_leadingCharacters')
  request.r(i979[34], i979[35], 0, i978, 'm_followingCharacters')
  i978.m_UseModernHangulLineBreakingRules = !!i979[36]
  return i978
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i983 = data
  i982.m_GlyphIndex = i983[0]
  i982.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i983[1], i982.m_GlyphValueRecord)
  return i982
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i985 = data
  i984.m_XPlacement = i985[0]
  i984.m_YPlacement = i985[1]
  i984.m_XAdvance = i985[2]
  i984.m_YAdvance = i985[3]
  return i984
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i987 = data
  i986.hashCode = i987[0]
  request.r(i987[1], i987[2], 0, i986, 'material')
  i986.materialHashCode = i987[3]
  request.r(i987[4], i987[5], 0, i986, 'spriteSheet')
  var i989 = i987[6]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('TMPro.TMP_Sprite', i989[i + 0]));
  }
  i986.spriteInfoList = i988
  var i991 = i987[7]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i986.fallbackSpriteAssets = i990
  i986.m_Version = i987[8]
  i986.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i987[9], i986.m_FaceInfo)
  var i993 = i987[10]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('TMPro.TMP_SpriteCharacter', i993[i + 0]));
  }
  i986.m_SpriteCharacterTable = i992
  var i995 = i987[11]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i995.length; i += 1) {
    i994.add(request.d('TMPro.TMP_SpriteGlyph', i995[i + 0]));
  }
  i986.m_SpriteGlyphTable = i994
  return i986
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_Sprite' )
  var i999 = data
  i998.name = i999[0]
  i998.hashCode = i999[1]
  i998.unicode = i999[2]
  i998.pivot = new pc.Vec2( i999[3], i999[4] )
  request.r(i999[5], i999[6], 0, i998, 'sprite')
  i998.id = i999[7]
  i998.x = i999[8]
  i998.y = i999[9]
  i998.width = i999[10]
  i998.height = i999[11]
  i998.xOffset = i999[12]
  i998.yOffset = i999[13]
  i998.xAdvance = i999[14]
  i998.scale = i999[15]
  return i998
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1005 = data
  i1004.m_Name = i1005[0]
  i1004.m_HashCode = i1005[1]
  i1004.m_ElementType = i1005[2]
  i1004.m_Unicode = i1005[3]
  i1004.m_GlyphIndex = i1005[4]
  i1004.m_Scale = i1005[5]
  return i1004
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'sprite')
  i1008.m_Index = i1009[2]
  i1008.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1009[3], i1008.m_Metrics)
  i1008.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1009[4], i1008.m_GlyphRect)
  i1008.m_Scale = i1009[5]
  i1008.m_AtlasIndex = i1009[6]
  return i1008
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('TMPro.TMP_Style', i1013[i + 0]));
  }
  i1010.m_StyleList = i1012
  return i1010
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_Style' )
  var i1017 = data
  i1016.m_Name = i1017[0]
  i1016.m_HashCode = i1017[1]
  i1016.m_OpeningDefinition = i1017[2]
  i1016.m_ClosingDefinition = i1017[3]
  i1016.m_OpeningTagArray = i1017[4]
  i1016.m_ClosingTagArray = i1017[5]
  i1016.m_OpeningTagUnicodeArray = i1017[6]
  i1016.m_ClosingTagUnicodeArray = i1017[7]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1021[i + 0]) );
  }
  i1018.files = i1020
  i1018.componentToPrefabIds = i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1025 = data
  i1024.path = i1025[0]
  request.r(i1025[1], i1025[2], 0, i1024, 'unityObject')
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1029[i + 0]) );
  }
  i1026.scriptsExecutionOrder = i1028
  var i1031 = i1027[1]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1031[i + 0]) );
  }
  i1026.sortingLayers = i1030
  var i1033 = i1027[2]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1033[i + 0]) );
  }
  i1026.cullingLayers = i1032
  i1026.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1027[3], i1026.timeSettings)
  i1026.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1027[4], i1026.physicsSettings)
  i1026.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1027[5], i1026.physics2DSettings)
  i1026.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1027[6], i1026.qualitySettings)
  i1026.enableRealtimeShadows = !!i1027[7]
  i1026.enableAutoInstancing = !!i1027[8]
  i1026.enableDynamicBatching = !!i1027[9]
  i1026.lightmapEncodingQuality = i1027[10]
  i1026.desiredColorSpace = i1027[11]
  var i1035 = i1027[12]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1026.allTags = i1034
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.value = i1039[1]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1043 = data
  i1042.id = i1043[0]
  i1042.name = i1043[1]
  i1042.value = i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1047 = data
  i1046.id = i1047[0]
  i1046.name = i1047[1]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1049 = data
  i1048.fixedDeltaTime = i1049[0]
  i1048.maximumDeltaTime = i1049[1]
  i1048.timeScale = i1049[2]
  i1048.maximumParticleTimestep = i1049[3]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1051 = data
  i1050.gravity = new pc.Vec3( i1051[0], i1051[1], i1051[2] )
  i1050.defaultSolverIterations = i1051[3]
  i1050.bounceThreshold = i1051[4]
  i1050.autoSyncTransforms = !!i1051[5]
  i1050.autoSimulation = !!i1051[6]
  var i1053 = i1051[7]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1053[i + 0]) );
  }
  i1050.collisionMatrix = i1052
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1057 = data
  i1056.enabled = !!i1057[0]
  i1056.layerId = i1057[1]
  i1056.otherLayerId = i1057[2]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'material')
  i1058.gravity = new pc.Vec2( i1059[2], i1059[3] )
  i1058.positionIterations = i1059[4]
  i1058.velocityIterations = i1059[5]
  i1058.velocityThreshold = i1059[6]
  i1058.maxLinearCorrection = i1059[7]
  i1058.maxAngularCorrection = i1059[8]
  i1058.maxTranslationSpeed = i1059[9]
  i1058.maxRotationSpeed = i1059[10]
  i1058.timeToSleep = i1059[11]
  i1058.linearSleepTolerance = i1059[12]
  i1058.angularSleepTolerance = i1059[13]
  i1058.defaultContactOffset = i1059[14]
  i1058.autoSimulation = !!i1059[15]
  i1058.queriesHitTriggers = !!i1059[16]
  i1058.queriesStartInColliders = !!i1059[17]
  i1058.callbacksOnDisable = !!i1059[18]
  i1058.reuseCollisionCallbacks = !!i1059[19]
  i1058.autoSyncTransforms = !!i1059[20]
  var i1061 = i1059[21]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1061[i + 0]) );
  }
  i1058.collisionMatrix = i1060
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1065 = data
  i1064.enabled = !!i1065[0]
  i1064.layerId = i1065[1]
  i1064.otherLayerId = i1065[2]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1069[i + 0]) );
  }
  i1066.qualityLevels = i1068
  var i1071 = i1067[1]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1066.names = i1070
  i1066.shadows = i1067[2]
  i1066.anisotropicFiltering = i1067[3]
  i1066.antiAliasing = i1067[4]
  i1066.lodBias = i1067[5]
  i1066.shadowCascades = i1067[6]
  i1066.shadowDistance = i1067[7]
  i1066.shadowmaskMode = i1067[8]
  i1066.shadowProjection = i1067[9]
  i1066.shadowResolution = i1067[10]
  i1066.softParticles = !!i1067[11]
  i1066.softVegetation = !!i1067[12]
  i1066.activeColorSpace = i1067[13]
  i1066.desiredColorSpace = i1067[14]
  i1066.masterTextureLimit = i1067[15]
  i1066.maxQueuedFrames = i1067[16]
  i1066.particleRaycastBudget = i1067[17]
  i1066.pixelLightCount = i1067[18]
  i1066.realtimeReflectionProbes = !!i1067[19]
  i1066.shadowCascade2Split = i1067[20]
  i1066.shadowCascade4Split = new pc.Vec3( i1067[21], i1067[22], i1067[23] )
  i1066.streamingMipmapsActive = !!i1067[24]
  i1066.vSyncCount = i1067[25]
  i1066.asyncUploadBufferSize = i1067[26]
  i1066.asyncUploadTimeSlice = i1067[27]
  i1066.billboardsFaceCameraPosition = !!i1067[28]
  i1066.shadowNearPlaneOffset = i1067[29]
  i1066.streamingMipmapsMemoryBudget = i1067[30]
  i1066.maximumLODLevel = i1067[31]
  i1066.streamingMipmapsAddAllCameras = !!i1067[32]
  i1066.streamingMipmapsMaxLevelReduction = i1067[33]
  i1066.streamingMipmapsRenderersPerFrame = i1067[34]
  i1066.resolutionScalingFixedDPIFactor = i1067[35]
  i1066.streamingMipmapsMaxFileIORequests = i1067[36]
  i1066.currentQualityLevel = i1067[37]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1077 = data
  i1076.weight = i1077[0]
  i1076.vertices = i1077[1]
  i1076.normals = i1077[2]
  i1076.tangents = i1077[3]
  return i1076
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1079 = data
  i1078.xPlacement = i1079[0]
  i1078.yPlacement = i1079[1]
  i1078.xAdvance = i1079[2]
  i1078.yAdvance = i1079[3]
  return i1078
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[35],"59":[3],"60":[42],"61":[42],"62":[42],"63":[42],"64":[42],"65":[42],"66":[42],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[3],"82":[10],"83":[84],"85":[84],"15":[14],"86":[3],"87":[14],"88":[3],"89":[14],"90":[18,14],"91":[10],"92":[18,14],"93":[14],"94":[10,14],"39":[14,18],"95":[14],"96":[14],"97":[14],"17":[15],"19":[18,14],"98":[14],"31":[15],"99":[14],"100":[14],"101":[14],"102":[14],"103":[14],"104":[14],"105":[14],"106":[14],"107":[14],"108":[18,14],"109":[14],"110":[14],"111":[14],"112":[14],"113":[18,14],"114":[14],"115":[25],"116":[25],"26":[25],"117":[25],"118":[3],"119":[3]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraController","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UltimateJoystick","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasGroup","UnityEngine.Sprite","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager2","PlayerController","UnityEngine.GameObject","MachineController","UnityEngine.UI.CanvasScaler","LookAtCam","TableRegion","GuestController","UnityEngine.SkinnedMeshRenderer","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UnityEngine.Rigidbody","UnityEngine.SpriteRenderer","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.PostProcessing.PostProcessingBehaviour","CnControls.EmptyGraphic","ToonyColorsPro.Runtime.TCP2_CameraDepth","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.43f1";

Deserializers.productName = "PizzaFever";

Deserializers.lunaInitializationTime = "02/08/2023 04:35:52";

Deserializers.lunaDaysRunning = "1.3";

Deserializers.lunaVersion = "4.5.0";

Deserializers.lunaSHA = "e4ae93a78eaa9153669b1450e90ff3b58c43ef2c";

Deserializers.creativeName = "123";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "5075b2ff-2ea4-4091-a6fa-d23e0e243623";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.4.8\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "";

Deserializers.iosLink = "";

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1103";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4087";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PizzaFever";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "805fa3fb-339e-4737-80cc-95bf893bf215";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

