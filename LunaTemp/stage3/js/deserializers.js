var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1818 = root || request.c( 'UnityEngine.JointSpring' )
  var i1819 = data
  i1818.spring = i1819[0]
  i1818.damper = i1819[1]
  i1818.targetPosition = i1819[2]
  return i1818
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1820 = root || request.c( 'UnityEngine.JointMotor' )
  var i1821 = data
  i1820.m_TargetVelocity = i1821[0]
  i1820.m_Force = i1821[1]
  i1820.m_FreeSpin = i1821[2]
  return i1820
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1822 = root || request.c( 'UnityEngine.JointLimits' )
  var i1823 = data
  i1822.m_Min = i1823[0]
  i1822.m_Max = i1823[1]
  i1822.m_Bounciness = i1823[2]
  i1822.m_BounceMinVelocity = i1823[3]
  i1822.m_ContactDistance = i1823[4]
  i1822.minBounce = i1823[5]
  i1822.maxBounce = i1823[6]
  return i1822
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1824 = root || request.c( 'UnityEngine.JointDrive' )
  var i1825 = data
  i1824.m_PositionSpring = i1825[0]
  i1824.m_PositionDamper = i1825[1]
  i1824.m_MaximumForce = i1825[2]
  return i1824
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1827 = data
  i1826.m_Spring = i1827[0]
  i1826.m_Damper = i1827[1]
  return i1826
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1828 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1829 = data
  i1828.m_Limit = i1829[0]
  i1828.m_Bounciness = i1829[1]
  i1828.m_ContactDistance = i1829[2]
  return i1828
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1830 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1831 = data
  i1830.m_ExtremumSlip = i1831[0]
  i1830.m_ExtremumValue = i1831[1]
  i1830.m_AsymptoteSlip = i1831[2]
  i1830.m_AsymptoteValue = i1831[3]
  i1830.m_Stiffness = i1831[4]
  return i1830
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1833 = data
  i1832.m_LowerAngle = i1833[0]
  i1832.m_UpperAngle = i1833[1]
  return i1832
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1835 = data
  i1834.m_MotorSpeed = i1835[0]
  i1834.m_MaximumMotorTorque = i1835[1]
  return i1834
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1836 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1837 = data
  i1836.m_DampingRatio = i1837[0]
  i1836.m_Frequency = i1837[1]
  i1836.m_Angle = i1837[2]
  return i1836
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1839 = data
  i1838.m_LowerTranslation = i1839[0]
  i1838.m_UpperTranslation = i1839[1]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1840 = root || new pc.UnityMaterial()
  var i1841 = data
  i1840.name = i1841[0]
  request.r(i1841[1], i1841[2], 0, i1840, 'shader')
  i1840.renderQueue = i1841[3]
  i1840.enableInstancing = !!i1841[4]
  var i1843 = i1841[5]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1843[i + 0]) );
  }
  i1840.floatParameters = i1842
  var i1845 = i1841[6]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1845[i + 0]) );
  }
  i1840.colorParameters = i1844
  var i1847 = i1841[7]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1847[i + 0]) );
  }
  i1840.vectorParameters = i1846
  var i1849 = i1841[8]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1849[i + 0]) );
  }
  i1840.textureParameters = i1848
  var i1851 = i1841[9]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1851[i + 0]) );
  }
  i1840.materialFlags = i1850
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1855 = data
  i1854.name = i1855[0]
  i1854.value = i1855[1]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1859 = data
  i1858.name = i1859[0]
  i1858.value = new pc.Color(i1859[1], i1859[2], i1859[3], i1859[4])
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1863 = data
  i1862.name = i1863[0]
  i1862.value = new pc.Vec4( i1863[1], i1863[2], i1863[3], i1863[4] )
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1867 = data
  i1866.name = i1867[0]
  request.r(i1867[1], i1867[2], 0, i1866, 'value')
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1871 = data
  i1870.name = i1871[0]
  i1870.enabled = !!i1871[1]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1873 = data
  i1872.name = i1873[0]
  i1872.width = i1873[1]
  i1872.height = i1873[2]
  i1872.mipmapCount = i1873[3]
  i1872.anisoLevel = i1873[4]
  i1872.filterMode = i1873[5]
  i1872.hdr = !!i1873[6]
  i1872.format = i1873[7]
  i1872.wrapMode = i1873[8]
  i1872.alphaIsTransparency = !!i1873[9]
  i1872.alphaSource = i1873[10]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1875 = data
  i1874.name = i1875[0]
  i1874.halfPrecision = !!i1875[1]
  i1874.vertexCount = i1875[2]
  i1874.aabb = i1875[3]
  var i1877 = i1875[4]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( !!i1877[i + 0] );
  }
  i1874.streams = i1876
  i1874.vertices = i1875[5]
  var i1879 = i1875[6]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1879[i + 0]) );
  }
  i1874.subMeshes = i1878
  var i1881 = i1875[7]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 16) {
    i1880.push( new pc.Mat4().setData(i1881[i + 0], i1881[i + 1], i1881[i + 2], i1881[i + 3],  i1881[i + 4], i1881[i + 5], i1881[i + 6], i1881[i + 7],  i1881[i + 8], i1881[i + 9], i1881[i + 10], i1881[i + 11],  i1881[i + 12], i1881[i + 13], i1881[i + 14], i1881[i + 15]) );
  }
  i1874.bindposes = i1880
  var i1883 = i1875[8]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1883[i + 0]) );
  }
  i1874.blendShapes = i1882
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1889 = data
  i1888.triangles = i1889[0]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1895 = data
  i1894.name = i1895[0]
  var i1897 = i1895[1]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1897[i + 0]) );
  }
  i1894.frames = i1896
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1899 = data
  i1898.position = new pc.Vec3( i1899[0], i1899[1], i1899[2] )
  i1898.scale = new pc.Vec3( i1899[3], i1899[4], i1899[5] )
  i1898.rotation = new pc.Quat(i1899[6], i1899[7], i1899[8], i1899[9])
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1901 = data
  i1900.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1901[0], i1900.main)
  i1900.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1901[1], i1900.colorBySpeed)
  i1900.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1901[2], i1900.colorOverLifetime)
  i1900.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1901[3], i1900.emission)
  i1900.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1901[4], i1900.rotationBySpeed)
  i1900.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1901[5], i1900.rotationOverLifetime)
  i1900.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1901[6], i1900.shape)
  i1900.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1901[7], i1900.sizeBySpeed)
  i1900.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1901[8], i1900.sizeOverLifetime)
  i1900.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1901[9], i1900.textureSheetAnimation)
  i1900.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1901[10], i1900.velocityOverLifetime)
  i1900.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1901[11], i1900.noise)
  i1900.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1901[12], i1900.inheritVelocity)
  i1900.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1901[13], i1900.forceOverLifetime)
  i1900.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1901[14], i1900.limitVelocityOverLifetime)
  i1900.useAutoRandomSeed = !!i1901[15]
  i1900.randomSeed = i1901[16]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1902 = root || new pc.ParticleSystemMain()
  var i1903 = data
  i1902.duration = i1903[0]
  i1902.loop = !!i1903[1]
  i1902.prewarm = !!i1903[2]
  i1902.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[3], i1902.startDelay)
  i1902.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[4], i1902.startLifetime)
  i1902.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[5], i1902.startSpeed)
  i1902.startSize3D = !!i1903[6]
  i1902.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[7], i1902.startSizeX)
  i1902.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[8], i1902.startSizeY)
  i1902.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[9], i1902.startSizeZ)
  i1902.startRotation3D = !!i1903[10]
  i1902.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[11], i1902.startRotationX)
  i1902.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[12], i1902.startRotationY)
  i1902.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[13], i1902.startRotationZ)
  i1902.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1903[14], i1902.startColor)
  i1902.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[15], i1902.gravityModifier)
  i1902.simulationSpace = i1903[16]
  request.r(i1903[17], i1903[18], 0, i1902, 'customSimulationSpace')
  i1902.simulationSpeed = i1903[19]
  i1902.useUnscaledTime = !!i1903[20]
  i1902.scalingMode = i1903[21]
  i1902.playOnAwake = !!i1903[22]
  i1902.maxParticles = i1903[23]
  i1902.emitterVelocityMode = i1903[24]
  i1902.stopAction = i1903[25]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1904 = root || new pc.MinMaxCurve()
  var i1905 = data
  i1904.mode = i1905[0]
  i1904.curveMin = new pc.AnimationCurve( { keys_flow: i1905[1] } )
  i1904.curveMax = new pc.AnimationCurve( { keys_flow: i1905[2] } )
  i1904.curveMultiplier = i1905[3]
  i1904.constantMin = i1905[4]
  i1904.constantMax = i1905[5]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1906 = root || new pc.MinMaxGradient()
  var i1907 = data
  i1906.mode = i1907[0]
  i1906.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1907[1], i1906.gradientMin)
  i1906.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1907[2], i1906.gradientMax)
  i1906.colorMin = new pc.Color(i1907[3], i1907[4], i1907[5], i1907[6])
  i1906.colorMax = new pc.Color(i1907[7], i1907[8], i1907[9], i1907[10])
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1909 = data
  i1908.mode = i1909[0]
  var i1911 = i1909[1]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1911[i + 0]) );
  }
  i1908.colorKeys = i1910
  var i1913 = i1909[2]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1913[i + 0]) );
  }
  i1908.alphaKeys = i1912
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1914 = root || new pc.ParticleSystemColorBySpeed()
  var i1915 = data
  i1914.enabled = !!i1915[0]
  i1914.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1915[1], i1914.color)
  i1914.range = new pc.Vec2( i1915[2], i1915[3] )
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1919 = data
  i1918.color = new pc.Color(i1919[0], i1919[1], i1919[2], i1919[3])
  i1918.time = i1919[4]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1923 = data
  i1922.alpha = i1923[0]
  i1922.time = i1923[1]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1924 = root || new pc.ParticleSystemColorOverLifetime()
  var i1925 = data
  i1924.enabled = !!i1925[0]
  i1924.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1925[1], i1924.color)
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1926 = root || new pc.ParticleSystemEmitter()
  var i1927 = data
  i1926.enabled = !!i1927[0]
  i1926.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[1], i1926.rateOverTime)
  i1926.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[2], i1926.rateOverDistance)
  var i1929 = i1927[3]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1929[i + 0]) );
  }
  i1926.bursts = i1928
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1932 = root || new pc.ParticleSystemBurst()
  var i1933 = data
  i1932.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[0], i1932.count)
  i1932.cycleCount = i1933[1]
  i1932.minCount = i1933[2]
  i1932.maxCount = i1933[3]
  i1932.repeatInterval = i1933[4]
  i1932.time = i1933[5]
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1934 = root || new pc.ParticleSystemRotationBySpeed()
  var i1935 = data
  i1934.enabled = !!i1935[0]
  i1934.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[1], i1934.x)
  i1934.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[2], i1934.y)
  i1934.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[3], i1934.z)
  i1934.separateAxes = !!i1935[4]
  i1934.range = new pc.Vec2( i1935[5], i1935[6] )
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1936 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[1], i1936.x)
  i1936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[2], i1936.y)
  i1936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[3], i1936.z)
  i1936.separateAxes = !!i1937[4]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1938 = root || new pc.ParticleSystemShape()
  var i1939 = data
  i1938.enabled = !!i1939[0]
  i1938.shapeType = i1939[1]
  i1938.randomDirectionAmount = i1939[2]
  i1938.sphericalDirectionAmount = i1939[3]
  i1938.randomPositionAmount = i1939[4]
  i1938.alignToDirection = !!i1939[5]
  i1938.radius = i1939[6]
  i1938.radiusMode = i1939[7]
  i1938.radiusSpread = i1939[8]
  i1938.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[9], i1938.radiusSpeed)
  i1938.radiusThickness = i1939[10]
  i1938.angle = i1939[11]
  i1938.length = i1939[12]
  i1938.boxThickness = new pc.Vec3( i1939[13], i1939[14], i1939[15] )
  i1938.meshShapeType = i1939[16]
  request.r(i1939[17], i1939[18], 0, i1938, 'mesh')
  request.r(i1939[19], i1939[20], 0, i1938, 'meshRenderer')
  request.r(i1939[21], i1939[22], 0, i1938, 'skinnedMeshRenderer')
  i1938.useMeshMaterialIndex = !!i1939[23]
  i1938.meshMaterialIndex = i1939[24]
  i1938.useMeshColors = !!i1939[25]
  i1938.normalOffset = i1939[26]
  i1938.arc = i1939[27]
  i1938.arcMode = i1939[28]
  i1938.arcSpread = i1939[29]
  i1938.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[30], i1938.arcSpeed)
  i1938.donutRadius = i1939[31]
  i1938.position = new pc.Vec3( i1939[32], i1939[33], i1939[34] )
  i1938.rotation = new pc.Vec3( i1939[35], i1939[36], i1939[37] )
  i1938.scale = new pc.Vec3( i1939[38], i1939[39], i1939[40] )
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1940 = root || new pc.ParticleSystemSizeBySpeed()
  var i1941 = data
  i1940.enabled = !!i1941[0]
  i1940.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[1], i1940.x)
  i1940.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[2], i1940.y)
  i1940.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[3], i1940.z)
  i1940.separateAxes = !!i1941[4]
  i1940.range = new pc.Vec2( i1941[5], i1941[6] )
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1942 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1943 = data
  i1942.enabled = !!i1943[0]
  i1942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[1], i1942.x)
  i1942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[2], i1942.y)
  i1942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[3], i1942.z)
  i1942.separateAxes = !!i1943[4]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1944 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.mode = i1945[1]
  i1944.animation = i1945[2]
  i1944.numTilesX = i1945[3]
  i1944.numTilesY = i1945[4]
  i1944.useRandomRow = !!i1945[5]
  i1944.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[6], i1944.frameOverTime)
  i1944.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[7], i1944.startFrame)
  i1944.cycleCount = i1945[8]
  i1944.rowIndex = i1945[9]
  i1944.flipU = i1945[10]
  i1944.flipV = i1945[11]
  i1944.spriteCount = i1945[12]
  var i1947 = i1945[13]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 2) {
  request.r(i1947[i + 0], i1947[i + 1], 2, i1946, '')
  }
  i1944.sprites = i1946
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1951 = data
  i1950.enabled = !!i1951[0]
  i1950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[1], i1950.x)
  i1950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[2], i1950.y)
  i1950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.z)
  i1950.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[4], i1950.speedModifier)
  i1950.space = i1951[5]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1952 = root || new pc.ParticleSystemNoise()
  var i1953 = data
  i1952.enabled = !!i1953[0]
  i1952.separateAxes = !!i1953[1]
  i1952.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[2], i1952.strengthX)
  i1952.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[3], i1952.strengthY)
  i1952.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[4], i1952.strengthZ)
  i1952.frequency = i1953[5]
  i1952.damping = !!i1953[6]
  i1952.octaveCount = i1953[7]
  i1952.octaveMultiplier = i1953[8]
  i1952.octaveScale = i1953[9]
  i1952.quality = i1953[10]
  i1952.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[11], i1952.scrollSpeed)
  i1952.scrollSpeedMultiplier = i1953[12]
  i1952.remapEnabled = !!i1953[13]
  i1952.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[14], i1952.remapX)
  i1952.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[15], i1952.remapY)
  i1952.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[16], i1952.remapZ)
  i1952.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[17], i1952.positionAmount)
  i1952.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[18], i1952.rotationAmount)
  i1952.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[19], i1952.sizeAmount)
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1954 = root || new pc.ParticleSystemInheritVelocity()
  var i1955 = data
  i1954.enabled = !!i1955[0]
  i1954.mode = i1955[1]
  i1954.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[2], i1954.curve)
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1956 = root || new pc.ParticleSystemForceOverLifetime()
  var i1957 = data
  i1956.enabled = !!i1957[0]
  i1956.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[1], i1956.x)
  i1956.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[2], i1956.y)
  i1956.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[3], i1956.z)
  i1956.space = i1957[4]
  i1956.randomized = !!i1957[5]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1958 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1959 = data
  i1958.enabled = !!i1959[0]
  i1958.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[1], i1958.limitX)
  i1958.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[2], i1958.limitY)
  i1958.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[3], i1958.limitZ)
  i1958.dampen = i1959[4]
  i1958.separateAxes = !!i1959[5]
  i1958.space = i1959[6]
  i1958.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[7], i1958.drag)
  i1958.multiplyDragByParticleSize = !!i1959[8]
  i1958.multiplyDragByParticleVelocity = !!i1959[9]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1961 = data
  i1960.enabled = !!i1961[0]
  request.r(i1961[1], i1961[2], 0, i1960, 'sharedMaterial')
  var i1963 = i1961[3]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 2) {
  request.r(i1963[i + 0], i1963[i + 1], 2, i1962, '')
  }
  i1960.sharedMaterials = i1962
  i1960.receiveShadows = !!i1961[4]
  i1960.shadowCastingMode = i1961[5]
  i1960.sortingLayerID = i1961[6]
  i1960.sortingOrder = i1961[7]
  i1960.lightmapIndex = i1961[8]
  i1960.lightmapSceneIndex = i1961[9]
  i1960.lightmapScaleOffset = new pc.Vec4( i1961[10], i1961[11], i1961[12], i1961[13] )
  i1960.lightProbeUsage = i1961[14]
  i1960.reflectionProbeUsage = i1961[15]
  request.r(i1961[16], i1961[17], 0, i1960, 'mesh')
  i1960.meshCount = i1961[18]
  i1960.activeVertexStreamsCount = i1961[19]
  i1960.alignment = i1961[20]
  i1960.renderMode = i1961[21]
  i1960.sortMode = i1961[22]
  i1960.lengthScale = i1961[23]
  i1960.velocityScale = i1961[24]
  i1960.cameraVelocityScale = i1961[25]
  i1960.normalDirection = i1961[26]
  i1960.sortingFudge = i1961[27]
  i1960.minParticleSize = i1961[28]
  i1960.maxParticleSize = i1961[29]
  i1960.pivot = new pc.Vec3( i1961[30], i1961[31], i1961[32] )
  request.r(i1961[33], i1961[34], 0, i1960, 'trailMaterial')
  return i1960
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i1966 = root || request.c( 'AutoDestroy' )
  var i1967 = data
  i1966.timeOut = i1967[0]
  i1966.typeDestroy = i1967[1]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1969 = data
  i1968.name = i1969[0]
  i1968.tagId = i1969[1]
  i1968.enabled = !!i1969[2]
  i1968.isStatic = !!i1969[3]
  i1968.layer = i1969[4]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1971 = data
  i1970.pivot = new pc.Vec2( i1971[0], i1971[1] )
  i1970.anchorMin = new pc.Vec2( i1971[2], i1971[3] )
  i1970.anchorMax = new pc.Vec2( i1971[4], i1971[5] )
  i1970.sizeDelta = new pc.Vec2( i1971[6], i1971[7] )
  i1970.anchoredPosition3D = new pc.Vec3( i1971[8], i1971[9], i1971[10] )
  i1970.rotation = new pc.Quat(i1971[11], i1971[12], i1971[13], i1971[14])
  i1970.scale = new pc.Vec3( i1971[15], i1971[16], i1971[17] )
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1973 = data
  i1972.enabled = !!i1973[0]
  i1972.planeDistance = i1973[1]
  i1972.referencePixelsPerUnit = i1973[2]
  i1972.isFallbackOverlay = !!i1973[3]
  i1972.renderMode = i1973[4]
  i1972.renderOrder = i1973[5]
  i1972.sortingLayerName = i1973[6]
  i1972.sortingOrder = i1973[7]
  i1972.scaleFactor = i1973[8]
  request.r(i1973[9], i1973[10], 0, i1972, 'worldCamera')
  i1972.overrideSorting = !!i1973[11]
  i1972.pixelPerfect = !!i1973[12]
  i1972.targetDisplay = i1973[13]
  i1972.overridePixelPerfect = !!i1973[14]
  return i1972
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1975 = data
  i1974.m_UiScaleMode = i1975[0]
  i1974.m_ReferencePixelsPerUnit = i1975[1]
  i1974.m_ScaleFactor = i1975[2]
  i1974.m_ReferenceResolution = new pc.Vec2( i1975[3], i1975[4] )
  i1974.m_ScreenMatchMode = i1975[5]
  i1974.m_MatchWidthOrHeight = i1975[6]
  i1974.m_PhysicalUnit = i1975[7]
  i1974.m_FallbackScreenDPI = i1975[8]
  i1974.m_DefaultSpriteDPI = i1975[9]
  i1974.m_DynamicPixelsPerUnit = i1975[10]
  i1974.m_PresetInfoIsWorld = !!i1975[11]
  return i1974
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1977 = data
  i1976.m_IgnoreReversedGraphics = !!i1977[0]
  i1976.m_BlockingObjects = i1977[1]
  i1976.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1977[2] )
  return i1976
}

Deserializers["LookAtCam"] = function (request, data, root) {
  var i1978 = root || request.c( 'LookAtCam' )
  var i1979 = data
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1981 = data
  i1980.cullTransparentMesh = !!i1981[0]
  return i1980
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.Image' )
  var i1983 = data
  request.r(i1983[0], i1983[1], 0, i1982, 'm_Sprite')
  i1982.m_Type = i1983[2]
  i1982.m_PreserveAspect = !!i1983[3]
  i1982.m_FillCenter = !!i1983[4]
  i1982.m_FillMethod = i1983[5]
  i1982.m_FillAmount = i1983[6]
  i1982.m_FillClockwise = !!i1983[7]
  i1982.m_FillOrigin = i1983[8]
  i1982.m_UseSpriteMesh = !!i1983[9]
  i1982.m_PixelsPerUnitMultiplier = i1983[10]
  request.r(i1983[11], i1983[12], 0, i1982, 'm_Material')
  i1982.m_Maskable = !!i1983[13]
  i1982.m_Color = new pc.Color(i1983[14], i1983[15], i1983[16], i1983[17])
  i1982.m_RaycastTarget = !!i1983[18]
  i1982.m_RaycastPadding = new pc.Vec4( i1983[19], i1983[20], i1983[21], i1983[22] )
  return i1982
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1984 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1985 = data
  i1984.m_hasFontAssetChanged = !!i1985[0]
  request.r(i1985[1], i1985[2], 0, i1984, 'm_baseMaterial')
  i1984.m_maskOffset = new pc.Vec4( i1985[3], i1985[4], i1985[5], i1985[6] )
  i1984.m_text = i1985[7]
  i1984.m_isRightToLeft = !!i1985[8]
  request.r(i1985[9], i1985[10], 0, i1984, 'm_fontAsset')
  request.r(i1985[11], i1985[12], 0, i1984, 'm_sharedMaterial')
  var i1987 = i1985[13]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 2) {
  request.r(i1987[i + 0], i1987[i + 1], 2, i1986, '')
  }
  i1984.m_fontSharedMaterials = i1986
  request.r(i1985[14], i1985[15], 0, i1984, 'm_fontMaterial')
  var i1989 = i1985[16]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 2) {
  request.r(i1989[i + 0], i1989[i + 1], 2, i1988, '')
  }
  i1984.m_fontMaterials = i1988
  i1984.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1985[17], i1985[18], i1985[19], i1985[20])
  i1984.m_fontColor = new pc.Color(i1985[21], i1985[22], i1985[23], i1985[24])
  i1984.m_enableVertexGradient = !!i1985[25]
  i1984.m_colorMode = i1985[26]
  i1984.m_fontColorGradient = request.d('TMPro.VertexGradient', i1985[27], i1984.m_fontColorGradient)
  request.r(i1985[28], i1985[29], 0, i1984, 'm_fontColorGradientPreset')
  request.r(i1985[30], i1985[31], 0, i1984, 'm_spriteAsset')
  i1984.m_tintAllSprites = !!i1985[32]
  request.r(i1985[33], i1985[34], 0, i1984, 'm_StyleSheet')
  i1984.m_TextStyleHashCode = i1985[35]
  i1984.m_overrideHtmlColors = !!i1985[36]
  i1984.m_faceColor = UnityEngine.Color32.ConstructColor(i1985[37], i1985[38], i1985[39], i1985[40])
  i1984.m_fontSize = i1985[41]
  i1984.m_fontSizeBase = i1985[42]
  i1984.m_fontWeight = i1985[43]
  i1984.m_enableAutoSizing = !!i1985[44]
  i1984.m_fontSizeMin = i1985[45]
  i1984.m_fontSizeMax = i1985[46]
  i1984.m_fontStyle = i1985[47]
  i1984.m_HorizontalAlignment = i1985[48]
  i1984.m_VerticalAlignment = i1985[49]
  i1984.m_textAlignment = i1985[50]
  i1984.m_characterSpacing = i1985[51]
  i1984.m_wordSpacing = i1985[52]
  i1984.m_lineSpacing = i1985[53]
  i1984.m_lineSpacingMax = i1985[54]
  i1984.m_paragraphSpacing = i1985[55]
  i1984.m_charWidthMaxAdj = i1985[56]
  i1984.m_enableWordWrapping = !!i1985[57]
  i1984.m_wordWrappingRatios = i1985[58]
  i1984.m_overflowMode = i1985[59]
  request.r(i1985[60], i1985[61], 0, i1984, 'm_linkedTextComponent')
  request.r(i1985[62], i1985[63], 0, i1984, 'parentLinkedComponent')
  i1984.m_enableKerning = !!i1985[64]
  i1984.m_enableExtraPadding = !!i1985[65]
  i1984.checkPaddingRequired = !!i1985[66]
  i1984.m_isRichText = !!i1985[67]
  i1984.m_parseCtrlCharacters = !!i1985[68]
  i1984.m_isOrthographic = !!i1985[69]
  i1984.m_isCullingEnabled = !!i1985[70]
  i1984.m_horizontalMapping = i1985[71]
  i1984.m_verticalMapping = i1985[72]
  i1984.m_uvLineOffset = i1985[73]
  i1984.m_geometrySortingOrder = i1985[74]
  i1984.m_IsTextObjectScaleStatic = !!i1985[75]
  i1984.m_VertexBufferAutoSizeReduction = !!i1985[76]
  i1984.m_useMaxVisibleDescender = !!i1985[77]
  i1984.m_pageToDisplay = i1985[78]
  i1984.m_margin = new pc.Vec4( i1985[79], i1985[80], i1985[81], i1985[82] )
  i1984.m_isUsingLegacyAnimationComponent = !!i1985[83]
  i1984.m_isVolumetricText = !!i1985[84]
  request.r(i1985[85], i1985[86], 0, i1984, 'm_Material')
  i1984.m_Maskable = !!i1985[87]
  i1984.m_Color = new pc.Color(i1985[88], i1985[89], i1985[90], i1985[91])
  i1984.m_RaycastTarget = !!i1985[92]
  i1984.m_RaycastPadding = new pc.Vec4( i1985[93], i1985[94], i1985[95], i1985[96] )
  return i1984
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1990 = root || request.c( 'TMPro.VertexGradient' )
  var i1991 = data
  i1990.topLeft = new pc.Color(i1991[0], i1991[1], i1991[2], i1991[3])
  i1990.topRight = new pc.Color(i1991[4], i1991[5], i1991[6], i1991[7])
  i1990.bottomLeft = new pc.Color(i1991[8], i1991[9], i1991[10], i1991[11])
  i1990.bottomRight = new pc.Color(i1991[12], i1991[13], i1991[14], i1991[15])
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.atlasId = i1993[1]
  i1992.mipmapCount = i1993[2]
  i1992.hdr = !!i1993[3]
  i1992.size = i1993[4]
  i1992.anisoLevel = i1993[5]
  i1992.filterMode = i1993[6]
  i1992.wrapMode = i1993[7]
  var i1995 = i1993[8]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 4) {
    i1994.push( UnityEngine.Rect.MinMaxRect(i1995[i + 0], i1995[i + 1], i1995[i + 2], i1995[i + 3]) );
  }
  i1992.rects = i1994
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1999 = data
  i1998.name = i1999[0]
  i1998.index = i1999[1]
  i1998.startup = !!i1999[2]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2001 = data
  i2000.enabled = !!i2001[0]
  i2000.aspect = i2001[1]
  i2000.orthographic = !!i2001[2]
  i2000.orthographicSize = i2001[3]
  i2000.backgroundColor = new pc.Color(i2001[4], i2001[5], i2001[6], i2001[7])
  i2000.nearClipPlane = i2001[8]
  i2000.farClipPlane = i2001[9]
  i2000.fieldOfView = i2001[10]
  i2000.depth = i2001[11]
  i2000.clearFlags = i2001[12]
  i2000.cullingMask = i2001[13]
  i2000.rect = i2001[14]
  request.r(i2001[15], i2001[16], 0, i2000, 'targetTexture')
  return i2000
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2002 = root || request.c( 'CameraController' )
  var i2003 = data
  request.r(i2003[0], i2003[1], 0, i2002, 'targetObject')
  i2002.offset = new pc.Vec3( i2003[2], i2003[3], i2003[4] )
  i2002.canFollow = !!i2003[5]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2005 = data
  i2004.enabled = !!i2005[0]
  i2004.type = i2005[1]
  i2004.color = new pc.Color(i2005[2], i2005[3], i2005[4], i2005[5])
  i2004.cullingMask = i2005[6]
  i2004.intensity = i2005[7]
  i2004.range = i2005[8]
  i2004.spotAngle = i2005[9]
  i2004.shadows = i2005[10]
  i2004.shadowNormalBias = i2005[11]
  i2004.shadowBias = i2005[12]
  i2004.shadowStrength = i2005[13]
  i2004.shadowResolution = i2005[14]
  i2004.lightmapBakeType = i2005[15]
  i2004.renderMode = i2005[16]
  request.r(i2005[17], i2005[18], 0, i2004, 'cookie')
  i2004.cookieSize = i2005[19]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, 'sharedMesh')
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2009 = data
  request.r(i2009[0], i2009[1], 0, i2008, 'additionalVertexStreams')
  i2008.enabled = !!i2009[2]
  request.r(i2009[3], i2009[4], 0, i2008, 'sharedMaterial')
  var i2011 = i2009[5]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 2) {
  request.r(i2011[i + 0], i2011[i + 1], 2, i2010, '')
  }
  i2008.sharedMaterials = i2010
  i2008.receiveShadows = !!i2009[6]
  i2008.shadowCastingMode = i2009[7]
  i2008.sortingLayerID = i2009[8]
  i2008.sortingOrder = i2009[9]
  i2008.lightmapIndex = i2009[10]
  i2008.lightmapSceneIndex = i2009[11]
  i2008.lightmapScaleOffset = new pc.Vec4( i2009[12], i2009[13], i2009[14], i2009[15] )
  i2008.lightProbeUsage = i2009[16]
  i2008.reflectionProbeUsage = i2009[17]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2013 = data
  i2012.enabled = !!i2013[0]
  i2012.isTrigger = !!i2013[1]
  request.r(i2013[2], i2013[3], 0, i2012, 'material')
  request.r(i2013[4], i2013[5], 0, i2012, 'sharedMesh')
  i2012.convex = !!i2013[6]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2015 = data
  i2014.center = new pc.Vec3( i2015[0], i2015[1], i2015[2] )
  i2014.size = new pc.Vec3( i2015[3], i2015[4], i2015[5] )
  i2014.enabled = !!i2015[6]
  i2014.isTrigger = !!i2015[7]
  request.r(i2015[8], i2015[9], 0, i2014, 'material')
  return i2014
}

Deserializers["UltimateJoystick"] = function (request, data, root) {
  var i2016 = root || request.c( 'UltimateJoystick' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'joystick')
  request.r(i2017[2], i2017[3], 0, i2016, 'joystickSizeFolder')
  request.r(i2017[4], i2017[5], 0, i2016, 'joystickBase')
  request.r(i2017[6], i2017[7], 0, i2016, 'highlightBase')
  request.r(i2017[8], i2017[9], 0, i2016, 'highlightJoystick')
  request.r(i2017[10], i2017[11], 0, i2016, 'tensionAccentUp')
  request.r(i2017[12], i2017[13], 0, i2016, 'tensionAccentDown')
  request.r(i2017[14], i2017[15], 0, i2016, 'tensionAccentLeft')
  request.r(i2017[16], i2017[17], 0, i2016, 'tensionAccentRight')
  i2016.scalingAxis = i2017[18]
  i2016.anchor = i2017[19]
  i2016.joystickTouchSize = i2017[20]
  i2016.joystickSize = i2017[21]
  i2016.radiusModifier = i2017[22]
  i2016.dynamicPositioning = !!i2017[23]
  i2016.customTouchSize_X = i2017[24]
  i2016.customTouchSize_Y = i2017[25]
  i2016.customTouchSizePos_X = i2017[26]
  i2016.customTouchSizePos_Y = i2017[27]
  i2016.customSpacing_X = i2017[28]
  i2016.customSpacing_Y = i2017[29]
  i2016.gravity = i2017[30]
  i2016.extendRadius = !!i2017[31]
  i2016.axis = i2017[32]
  i2016.boundary = i2017[33]
  i2016.tapCountOption = i2017[34]
  i2016.tapCountDuration = i2017[35]
  i2016.targetTapCount = i2017[36]
  i2016.deadZone = i2017[37]
  i2016.disableVisuals = !!i2017[38]
  i2016.useFade = !!i2017[39]
  i2016.fadeUntouched = i2017[40]
  i2016.fadeTouched = i2017[41]
  i2016.fadeInDuration = i2017[42]
  i2016.fadeOutDuration = i2017[43]
  i2016.useAnimation = !!i2017[44]
  request.r(i2017[45], i2017[46], 0, i2016, 'joystickAnimator')
  i2016.showHighlight = !!i2017[47]
  i2016.highlightColor = new pc.Color(i2017[48], i2017[49], i2017[50], i2017[51])
  i2016.showTension = !!i2017[52]
  i2016.tensionColorNone = new pc.Color(i2017[53], i2017[54], i2017[55], i2017[56])
  i2016.tensionColorFull = new pc.Color(i2017[57], i2017[58], i2017[59], i2017[60])
  i2016.joystickName = i2017[61]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'animatorController')
  i2018.updateMode = i2019[2]
  var i2021 = i2019[3]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 2) {
  request.r(i2021[i + 0], i2021[i + 1], 2, i2020, '')
  }
  i2018.humanBones = i2020
  i2018.enabled = !!i2019[4]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2025 = data
  i2024.m_Alpha = i2025[0]
  i2024.m_Interactable = !!i2025[1]
  i2024.m_BlocksRaycasts = !!i2025[2]
  i2024.m_IgnoreParentGroups = !!i2025[3]
  i2024.enabled = !!i2025[4]
  return i2024
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, 'm_FirstSelected')
  i2026.m_sendNavigationEvents = !!i2027[2]
  i2026.m_DragThreshold = i2027[3]
  return i2026
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2029 = data
  i2028.m_HorizontalAxis = i2029[0]
  i2028.m_VerticalAxis = i2029[1]
  i2028.m_SubmitButton = i2029[2]
  i2028.m_CancelButton = i2029[3]
  i2028.m_InputActionsPerSecond = i2029[4]
  i2028.m_RepeatDelay = i2029[5]
  i2028.m_ForceModuleActive = !!i2029[6]
  return i2028
}

Deserializers["GameManager2"] = function (request, data, root) {
  var i2030 = root || request.c( 'GameManager2' )
  var i2031 = data
  i2030.endGame = !!i2031[0]
  request.r(i2031[1], i2031[2], 0, i2030, 'player')
  i2030.totalMoney = i2031[3]
  i2030.countToEndcard = i2031[4]
  request.r(i2031[5], i2031[6], 0, i2030, 'canvasJoyStick')
  request.r(i2031[7], i2031[8], 0, i2030, 'btnEndcard')
  request.r(i2031[9], i2031[10], 0, i2030, 'guideMachine')
  request.r(i2031[11], i2031[12], 0, i2030, 'guide')
  request.r(i2031[13], i2031[14], 0, i2030, 'arrowGuideHolder')
  request.r(i2031[15], i2031[16], 0, i2030, 'confenti')
  return i2030
}

Deserializers["MachineController"] = function (request, data, root) {
  var i2032 = root || request.c( 'MachineController' )
  var i2033 = data
  var i2035 = i2033[0]
  var i2034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 1, i2034, '')
  }
  i2032.lstPizzaHolder = i2034
  return i2032
}

Deserializers["TableRegion"] = function (request, data, root) {
  var i2038 = root || request.c( 'TableRegion' )
  var i2039 = data
  request.r(i2039[0], i2039[1], 0, i2038, 'guest')
  i2038.numberPizza = i2039[2]
  request.r(i2039[3], i2039[4], 0, i2038, 'foodHolder')
  request.r(i2039[5], i2039[6], 0, i2038, 'mess')
  request.r(i2039[7], i2039[8], 0, i2038, 'canvas')
  request.r(i2039[9], i2039[10], 0, i2038, 'guide')
  return i2038
}

Deserializers["GuestController"] = function (request, data, root) {
  var i2040 = root || request.c( 'GuestController' )
  var i2041 = data
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2043 = data
  i2042.enabled = !!i2043[0]
  request.r(i2043[1], i2043[2], 0, i2042, 'sharedMaterial')
  var i2045 = i2043[3]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 2) {
  request.r(i2045[i + 0], i2045[i + 1], 2, i2044, '')
  }
  i2042.sharedMaterials = i2044
  i2042.receiveShadows = !!i2043[4]
  i2042.shadowCastingMode = i2043[5]
  i2042.sortingLayerID = i2043[6]
  i2042.sortingOrder = i2043[7]
  i2042.lightmapIndex = i2043[8]
  i2042.lightmapSceneIndex = i2043[9]
  i2042.lightmapScaleOffset = new pc.Vec4( i2043[10], i2043[11], i2043[12], i2043[13] )
  i2042.lightProbeUsage = i2043[14]
  i2042.reflectionProbeUsage = i2043[15]
  request.r(i2043[16], i2043[17], 0, i2042, 'sharedMesh')
  var i2047 = i2043[18]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 2) {
  request.r(i2047[i + 0], i2047[i + 1], 2, i2046, '')
  }
  i2042.bones = i2046
  i2042.updateWhenOffscreen = !!i2043[19]
  i2042.localBounds = i2043[20]
  request.r(i2043[21], i2043[22], 0, i2042, 'rootBone')
  var i2049 = i2043[23]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2049[i + 0]) );
  }
  i2042.blendShapesWeights = i2048
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2053 = data
  i2052.weight = i2053[0]
  return i2052
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i2054 = root || request.c( 'SoundManager' )
  var i2055 = data
  request.r(i2055[0], i2055[1], 0, i2054, 'crashMoney')
  request.r(i2055[2], i2055[3], 0, i2054, 'unlock')
  request.r(i2055[4], i2055[5], 0, i2054, 'region')
  request.r(i2055[6], i2055[7], 0, i2054, 'getPizza')
  request.r(i2055[8], i2055[9], 0, i2054, 'audioSource')
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'clip')
  request.r(i2057[2], i2057[3], 0, i2056, 'outputAudioMixerGroup')
  i2056.playOnAwake = !!i2057[4]
  i2056.loop = !!i2057[5]
  i2056.time = i2057[6]
  i2056.volume = i2057[7]
  i2056.pitch = i2057[8]
  i2056.enabled = !!i2057[9]
  return i2056
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.UI.Button' )
  var i2059 = data
  i2058.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2059[0], i2058.m_OnClick)
  i2058.m_Navigation = request.d('UnityEngine.UI.Navigation', i2059[1], i2058.m_Navigation)
  i2058.m_Transition = i2059[2]
  i2058.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2059[3], i2058.m_Colors)
  i2058.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2059[4], i2058.m_SpriteState)
  i2058.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2059[5], i2058.m_AnimationTriggers)
  i2058.m_Interactable = !!i2059[6]
  request.r(i2059[7], i2059[8], 0, i2058, 'm_TargetGraphic')
  return i2058
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2061 = data
  i2060.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2061[0], i2060.m_PersistentCalls)
  return i2060
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2062 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2063 = data
  var i2065 = i2063[0]
  var i2064 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.add(request.d('UnityEngine.Events.PersistentCall', i2065[i + 0]));
  }
  i2062.m_Calls = i2064
  return i2062
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2068 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2069 = data
  request.r(i2069[0], i2069[1], 0, i2068, 'm_Target')
  i2068.m_TargetAssemblyTypeName = i2069[2]
  i2068.m_MethodName = i2069[3]
  i2068.m_Mode = i2069[4]
  i2068.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2069[5], i2068.m_Arguments)
  i2068.m_CallState = i2069[6]
  return i2068
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'm_ObjectArgument')
  i2070.m_ObjectArgumentAssemblyTypeName = i2071[2]
  i2070.m_IntArgument = i2071[3]
  i2070.m_FloatArgument = i2071[4]
  i2070.m_StringArgument = i2071[5]
  i2070.m_BoolArgument = !!i2071[6]
  return i2070
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2073 = data
  i2072.m_Mode = i2073[0]
  i2072.m_WrapAround = !!i2073[1]
  request.r(i2073[2], i2073[3], 0, i2072, 'm_SelectOnUp')
  request.r(i2073[4], i2073[5], 0, i2072, 'm_SelectOnDown')
  request.r(i2073[6], i2073[7], 0, i2072, 'm_SelectOnLeft')
  request.r(i2073[8], i2073[9], 0, i2072, 'm_SelectOnRight')
  return i2072
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2075 = data
  i2074.m_NormalColor = new pc.Color(i2075[0], i2075[1], i2075[2], i2075[3])
  i2074.m_HighlightedColor = new pc.Color(i2075[4], i2075[5], i2075[6], i2075[7])
  i2074.m_PressedColor = new pc.Color(i2075[8], i2075[9], i2075[10], i2075[11])
  i2074.m_SelectedColor = new pc.Color(i2075[12], i2075[13], i2075[14], i2075[15])
  i2074.m_DisabledColor = new pc.Color(i2075[16], i2075[17], i2075[18], i2075[19])
  i2074.m_ColorMultiplier = i2075[20]
  i2074.m_FadeDuration = i2075[21]
  return i2074
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2077 = data
  request.r(i2077[0], i2077[1], 0, i2076, 'm_HighlightedSprite')
  request.r(i2077[2], i2077[3], 0, i2076, 'm_PressedSprite')
  request.r(i2077[4], i2077[5], 0, i2076, 'm_SelectedSprite')
  request.r(i2077[6], i2077[7], 0, i2076, 'm_DisabledSprite')
  return i2076
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2079 = data
  i2078.m_NormalTrigger = i2079[0]
  i2078.m_HighlightedTrigger = i2079[1]
  i2078.m_PressedTrigger = i2079[2]
  i2078.m_SelectedTrigger = i2079[3]
  i2078.m_DisabledTrigger = i2079[4]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2081 = data
  i2080.mass = i2081[0]
  i2080.drag = i2081[1]
  i2080.angularDrag = i2081[2]
  i2080.useGravity = !!i2081[3]
  i2080.isKinematic = !!i2081[4]
  i2080.constraints = i2081[5]
  i2080.maxAngularVelocity = i2081[6]
  i2080.collisionDetectionMode = i2081[7]
  i2080.interpolation = i2081[8]
  return i2080
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2082 = root || request.c( 'PlayerController' )
  var i2083 = data
  request.r(i2083[0], i2083[1], 0, i2082, 'animator')
  i2082.startTouch = !!i2083[2]
  i2082.playSoundRun = !!i2083[3]
  i2082.canMove = !!i2083[4]
  request.r(i2083[5], i2083[6], 0, i2082, 'rigid')
  i2082.isCarryPizza = !!i2083[7]
  request.r(i2083[8], i2083[9], 0, i2082, 'foodHolder')
  request.r(i2083[10], i2083[11], 0, i2082, 'foodHolderOnTable')
  request.r(i2083[12], i2083[13], 0, i2082, 'canvasMess')
  i2082.canSetAnim = !!i2083[14]
  i2082.speed = i2083[15]
  i2082.rotationSpeed = i2083[16]
  i2082.timeReleaseBrick = i2083[17]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2085 = data
  i2084.enabled = !!i2085[0]
  request.r(i2085[1], i2085[2], 0, i2084, 'sharedMaterial')
  var i2087 = i2085[3]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 2) {
  request.r(i2087[i + 0], i2087[i + 1], 2, i2086, '')
  }
  i2084.sharedMaterials = i2086
  i2084.receiveShadows = !!i2085[4]
  i2084.shadowCastingMode = i2085[5]
  i2084.sortingLayerID = i2085[6]
  i2084.sortingOrder = i2085[7]
  i2084.lightmapIndex = i2085[8]
  i2084.lightmapSceneIndex = i2085[9]
  i2084.lightmapScaleOffset = new pc.Vec4( i2085[10], i2085[11], i2085[12], i2085[13] )
  i2084.lightProbeUsage = i2085[14]
  i2084.reflectionProbeUsage = i2085[15]
  i2084.color = new pc.Color(i2085[16], i2085[17], i2085[18], i2085[19])
  request.r(i2085[20], i2085[21], 0, i2084, 'sprite')
  i2084.flipX = !!i2085[22]
  i2084.flipY = !!i2085[23]
  i2084.drawMode = i2085[24]
  i2084.size = new pc.Vec2( i2085[25], i2085[26] )
  i2084.tileMode = i2085[27]
  i2084.adaptiveModeThreshold = i2085[28]
  i2084.maskInteraction = i2085[29]
  i2084.spriteSortPoint = i2085[30]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2089 = data
  i2088.ambientIntensity = i2089[0]
  i2088.reflectionIntensity = i2089[1]
  i2088.ambientMode = i2089[2]
  i2088.ambientLight = new pc.Color(i2089[3], i2089[4], i2089[5], i2089[6])
  i2088.ambientSkyColor = new pc.Color(i2089[7], i2089[8], i2089[9], i2089[10])
  i2088.ambientGroundColor = new pc.Color(i2089[11], i2089[12], i2089[13], i2089[14])
  i2088.ambientEquatorColor = new pc.Color(i2089[15], i2089[16], i2089[17], i2089[18])
  i2088.fogColor = new pc.Color(i2089[19], i2089[20], i2089[21], i2089[22])
  i2088.fogEndDistance = i2089[23]
  i2088.fogStartDistance = i2089[24]
  i2088.fogDensity = i2089[25]
  i2088.fog = !!i2089[26]
  request.r(i2089[27], i2089[28], 0, i2088, 'skybox')
  i2088.fogMode = i2089[29]
  var i2091 = i2089[30]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2091[i + 0]) );
  }
  i2088.lightmaps = i2090
  i2088.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2089[31], i2088.lightProbes)
  i2088.lightmapsMode = i2089[32]
  i2088.environmentLightingMode = i2089[33]
  i2088.ambientProbe = new pc.SphericalHarmonicsL2(i2089[34])
  i2088.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2089[35])
  i2088.useReferenceAmbientProbe = !!i2089[36]
  request.r(i2089[37], i2089[38], 0, i2088, 'customReflection')
  request.r(i2089[39], i2089[40], 0, i2088, 'defaultReflection')
  i2088.defaultReflectionMode = i2089[41]
  i2088.defaultReflectionResolution = i2089[42]
  i2088.sunLightObjectId = i2089[43]
  i2088.pixelLightCount = i2089[44]
  i2088.defaultReflectionHDR = !!i2089[45]
  i2088.hasLightDataAsset = !!i2089[46]
  i2088.hasManualGenerate = !!i2089[47]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2095 = data
  request.r(i2095[0], i2095[1], 0, i2094, 'lightmapColor')
  request.r(i2095[2], i2095[3], 0, i2094, 'lightmapDirection')
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2096 = root || new UnityEngine.LightProbes()
  var i2097 = data
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2105 = data
  var i2107 = i2105[0]
  var i2106 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.add(i2107[i + 0]);
  }
  i2104.invalidShaderVariants = i2106
  i2104.name = i2105[1]
  i2104.guid = i2105[2]
  var i2109 = i2105[3]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( i2109[i + 0] );
  }
  i2104.shaderDefinedKeywords = i2108
  var i2111 = i2105[4]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2111[i + 0]) );
  }
  i2104.passes = i2110
  var i2113 = i2105[5]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2113[i + 0]) );
  }
  i2104.usePasses = i2112
  var i2115 = i2105[6]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2115[i + 0]) );
  }
  i2104.defaultParameterValues = i2114
  request.r(i2105[7], i2105[8], 0, i2104, 'unityFallbackShader')
  i2104.readDepth = !!i2105[9]
  i2104.isCreatedByShaderGraph = !!i2105[10]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2122 = root || new pc.UnityShaderPass()
  var i2123 = data
  i2122.id = i2123[0]
  i2122.subShaderIndex = i2123[1]
  i2122.name = i2123[2]
  i2122.passType = i2123[3]
  i2122.usePass = !!i2123[4]
  i2122.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2123[5], i2122.zTest)
  i2122.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2123[6], i2122.zWrite)
  i2122.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2123[7], i2122.culling)
  i2122.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2123[8], i2122.blending)
  i2122.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2123[9], i2122.alphaBlending)
  i2122.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2123[10], i2122.colorWriteMask)
  i2122.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2123[11], i2122.offsetUnits)
  i2122.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2123[12], i2122.offsetFactor)
  i2122.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2123[13], i2122.stencilRef)
  i2122.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2123[14], i2122.stencilReadMask)
  i2122.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2123[15], i2122.stencilWriteMask)
  i2122.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2123[16], i2122.stencilOp)
  i2122.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2123[17], i2122.stencilOpFront)
  i2122.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2123[18], i2122.stencilOpBack)
  var i2125 = i2123[19]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2125[i + 0]) );
  }
  i2122.tags = i2124
  var i2127 = i2123[20]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( i2127[i + 0] );
  }
  i2122.passDefinedKeywords = i2126
  var i2129 = i2123[21]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2129[i + 0]) );
  }
  i2122.passDefinedKeywordGroups = i2128
  var i2131 = i2123[22]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2131[i + 0]) );
  }
  i2122.variants = i2130
  var i2133 = i2123[23]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2133[i + 0]) );
  }
  i2122.excludedVariants = i2132
  i2122.hasDepthReader = !!i2123[24]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2135 = data
  i2134.val = i2135[0]
  i2134.name = i2135[1]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2137 = data
  i2136.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2137[0], i2136.src)
  i2136.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2137[1], i2136.dst)
  i2136.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2137[2], i2136.op)
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2139 = data
  i2138.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2139[0], i2138.pass)
  i2138.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2139[1], i2138.fail)
  i2138.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2139[2], i2138.zFail)
  i2138.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2139[3], i2138.comp)
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2143 = data
  i2142.name = i2143[0]
  i2142.value = i2143[1]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2147 = data
  var i2149 = i2147[0]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( i2149[i + 0] );
  }
  i2146.keywords = i2148
  i2146.hasDiscard = !!i2147[1]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2153 = data
  i2152.passId = i2153[0]
  i2152.subShaderIndex = i2153[1]
  var i2155 = i2153[2]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( i2155[i + 0] );
  }
  i2152.keywords = i2154
  i2152.vertexProgram = i2153[3]
  i2152.fragmentProgram = i2153[4]
  i2152.readDepth = !!i2153[5]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2159 = data
  request.r(i2159[0], i2159[1], 0, i2158, 'shader')
  i2158.pass = i2159[2]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2163 = data
  i2162.name = i2163[0]
  i2162.type = i2163[1]
  i2162.value = new pc.Vec4( i2163[2], i2163[3], i2163[4], i2163[5] )
  i2162.textureValue = i2163[6]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2165 = data
  i2164.name = i2165[0]
  request.r(i2165[1], i2165[2], 0, i2164, 'texture')
  i2164.aabb = i2165[3]
  i2164.vertices = i2165[4]
  i2164.triangles = i2165[5]
  i2164.textureRect = UnityEngine.Rect.MinMaxRect(i2165[6], i2165[7], i2165[8], i2165[9])
  i2164.packedRect = UnityEngine.Rect.MinMaxRect(i2165[10], i2165[11], i2165[12], i2165[13])
  i2164.border = new pc.Vec4( i2165[14], i2165[15], i2165[16], i2165[17] )
  i2164.transparency = i2165[18]
  i2164.bounds = i2165[19]
  i2164.pixelsPerUnit = i2165[20]
  i2164.textureWidth = i2165[21]
  i2164.textureHeight = i2165[22]
  i2164.nativeSize = new pc.Vec2( i2165[23], i2165[24] )
  i2164.pivot = new pc.Vec2( i2165[25], i2165[26] )
  i2164.textureRectOffset = new pc.Vec2( i2165[27], i2165[28] )
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2167 = data
  i2166.name = i2167[0]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2169 = data
  i2168.name = i2169[0]
  i2168.wrapMode = i2169[1]
  i2168.isLooping = !!i2169[2]
  i2168.length = i2169[3]
  var i2171 = i2169[4]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2171[i + 0]) );
  }
  i2168.curves = i2170
  var i2173 = i2169[5]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2173[i + 0]) );
  }
  i2168.events = i2172
  i2168.halfPrecision = !!i2169[6]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2177 = data
  i2176.path = i2177[0]
  i2176.componentType = i2177[1]
  i2176.property = i2177[2]
  i2176.keys = i2177[3]
  var i2179 = i2177[4]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2179[i + 0]) );
  }
  i2176.objectReferenceKeys = i2178
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2183 = data
  i2182.time = i2183[0]
  request.r(i2183[1], i2183[2], 0, i2182, 'value')
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2187 = data
  i2186.functionName = i2187[0]
  i2186.floatParameter = i2187[1]
  i2186.intParameter = i2187[2]
  i2186.stringParameter = i2187[3]
  request.r(i2187[4], i2187[5], 0, i2186, 'objectReferenceParameter')
  i2186.time = i2187[6]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2189 = data
  i2188.name = i2189[0]
  i2188.ascent = i2189[1]
  i2188.originalLineHeight = i2189[2]
  i2188.fontSize = i2189[3]
  var i2191 = i2189[4]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2191[i + 0]) );
  }
  i2188.characterInfo = i2190
  request.r(i2189[5], i2189[6], 0, i2188, 'texture')
  i2188.originalFontSize = i2189[7]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2195 = data
  i2194.index = i2195[0]
  i2194.advance = i2195[1]
  i2194.bearing = i2195[2]
  i2194.glyphWidth = i2195[3]
  i2194.glyphHeight = i2195[4]
  i2194.minX = i2195[5]
  i2194.maxX = i2195[6]
  i2194.minY = i2195[7]
  i2194.maxY = i2195[8]
  i2194.uvBottomLeftX = i2195[9]
  i2194.uvBottomLeftY = i2195[10]
  i2194.uvBottomRightX = i2195[11]
  i2194.uvBottomRightY = i2195[12]
  i2194.uvTopLeftX = i2195[13]
  i2194.uvTopLeftY = i2195[14]
  i2194.uvTopRightX = i2195[15]
  i2194.uvTopRightY = i2195[16]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2197 = data
  i2196.name = i2197[0]
  var i2199 = i2197[1]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2199[i + 0]) );
  }
  i2196.states = i2198
  var i2201 = i2197[2]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2201[i + 0]) );
  }
  i2196.layers = i2200
  var i2203 = i2197[3]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2203[i + 0]) );
  }
  i2196.parameters = i2202
  i2196.animationClips = i2197[4]
  i2196.HasSubStateMachines = !!i2197[5]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2207 = data
  i2206.cycleOffset = i2207[0]
  i2206.cycleOffsetParameter = i2207[1]
  i2206.cycleOffsetParameterActive = !!i2207[2]
  i2206.mirror = !!i2207[3]
  i2206.mirrorParameter = i2207[4]
  i2206.mirrorParameterActive = !!i2207[5]
  i2206.motionId = i2207[6]
  i2206.nameHash = i2207[7]
  i2206.fullPathHash = i2207[8]
  i2206.speed = i2207[9]
  i2206.speedParameter = i2207[10]
  i2206.speedParameterActive = !!i2207[11]
  i2206.tag = i2207[12]
  i2206.name = i2207[13]
  i2206.layer = i2207[14]
  i2206.writeDefaultValues = !!i2207[15]
  var i2209 = i2207[16]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2209[i + 0]) );
  }
  i2206.transitions = i2208
  var i2211 = i2207[17]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 2) {
  request.r(i2211[i + 0], i2211[i + 1], 2, i2210, '')
  }
  i2206.behaviours = i2210
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2215 = data
  i2214.fullPath = i2215[0]
  i2214.canTransitionToSelf = !!i2215[1]
  i2214.duration = i2215[2]
  i2214.exitTime = i2215[3]
  i2214.hasExitTime = !!i2215[4]
  i2214.hasFixedDuration = !!i2215[5]
  i2214.interruptionSource = i2215[6]
  i2214.offset = i2215[7]
  i2214.orderedInterruption = !!i2215[8]
  i2214.destinationStateNameHash = i2215[9]
  i2214.destinationStateMachineId = i2215[10]
  i2214.isExit = !!i2215[11]
  i2214.mute = !!i2215[12]
  i2214.solo = !!i2215[13]
  var i2217 = i2215[14]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2217[i + 0]) );
  }
  i2214.conditions = i2216
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2221 = data
  i2220.mode = i2221[0]
  i2220.parameter = i2221[1]
  i2220.threshold = i2221[2]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2227 = data
  i2226.blendingMode = i2227[0]
  i2226.defaultWeight = i2227[1]
  i2226.name = i2227[2]
  i2226.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2227[3], i2226.stateMachine)
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2229 = data
  i2228.id = i2229[0]
  i2228.defaultStateNameHash = i2229[1]
  var i2231 = i2229[2]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2231[i + 0]) );
  }
  i2228.entryTransitions = i2230
  var i2233 = i2229[3]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2233[i + 0]) );
  }
  i2228.anyStateTransitions = i2232
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2237 = data
  i2236.destinationStateNameHash = i2237[0]
  i2236.destinationStateMachineId = i2237[1]
  i2236.isExit = !!i2237[2]
  i2236.mute = !!i2237[3]
  i2236.solo = !!i2237[4]
  var i2239 = i2237[5]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2239[i + 0]) );
  }
  i2236.conditions = i2238
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2243 = data
  i2242.defaultBool = !!i2243[0]
  i2242.defaultFloat = i2243[1]
  i2242.defaultInt = i2243[2]
  i2242.name = i2243[3]
  i2242.nameHash = i2243[4]
  i2242.type = i2243[5]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2245 = data
  i2244.name = i2245[0]
  i2244.bytes64 = i2245[1]
  i2244.data = i2245[2]
  return i2244
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2246 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2247 = data
  i2246.hashCode = i2247[0]
  request.r(i2247[1], i2247[2], 0, i2246, 'material')
  i2246.materialHashCode = i2247[3]
  request.r(i2247[4], i2247[5], 0, i2246, 'atlas')
  i2246.normalStyle = i2247[6]
  i2246.normalSpacingOffset = i2247[7]
  i2246.boldStyle = i2247[8]
  i2246.boldSpacing = i2247[9]
  i2246.italicStyle = i2247[10]
  i2246.tabSize = i2247[11]
  i2246.m_Version = i2247[12]
  i2246.m_SourceFontFileGUID = i2247[13]
  request.r(i2247[14], i2247[15], 0, i2246, 'm_SourceFontFile_EditorRef')
  request.r(i2247[16], i2247[17], 0, i2246, 'm_SourceFontFile')
  i2246.m_AtlasPopulationMode = i2247[18]
  i2246.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2247[19], i2246.m_FaceInfo)
  var i2249 = i2247[20]
  var i2248 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.add(request.d('UnityEngine.TextCore.Glyph', i2249[i + 0]));
  }
  i2246.m_GlyphTable = i2248
  var i2251 = i2247[21]
  var i2250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.add(request.d('TMPro.TMP_Character', i2251[i + 0]));
  }
  i2246.m_CharacterTable = i2250
  var i2253 = i2247[22]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 2) {
  request.r(i2253[i + 0], i2253[i + 1], 2, i2252, '')
  }
  i2246.m_AtlasTextures = i2252
  i2246.m_AtlasTextureIndex = i2247[23]
  i2246.m_IsMultiAtlasTexturesEnabled = !!i2247[24]
  i2246.m_ClearDynamicDataOnBuild = !!i2247[25]
  var i2255 = i2247[26]
  var i2254 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.add(request.d('UnityEngine.TextCore.GlyphRect', i2255[i + 0]));
  }
  i2246.m_UsedGlyphRects = i2254
  var i2257 = i2247[27]
  var i2256 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.add(request.d('UnityEngine.TextCore.GlyphRect', i2257[i + 0]));
  }
  i2246.m_FreeGlyphRects = i2256
  i2246.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2247[28], i2246.m_fontInfo)
  i2246.m_AtlasWidth = i2247[29]
  i2246.m_AtlasHeight = i2247[30]
  i2246.m_AtlasPadding = i2247[31]
  i2246.m_AtlasRenderMode = i2247[32]
  var i2259 = i2247[33]
  var i2258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.add(request.d('TMPro.TMP_Glyph', i2259[i + 0]));
  }
  i2246.m_glyphInfoList = i2258
  i2246.m_KerningTable = request.d('TMPro.KerningTable', i2247[34], i2246.m_KerningTable)
  i2246.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2247[35], i2246.m_FontFeatureTable)
  var i2261 = i2247[36]
  var i2260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2261.length; i += 2) {
  request.r(i2261[i + 0], i2261[i + 1], 1, i2260, '')
  }
  i2246.fallbackFontAssets = i2260
  var i2263 = i2247[37]
  var i2262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2263.length; i += 2) {
  request.r(i2263[i + 0], i2263[i + 1], 1, i2262, '')
  }
  i2246.m_FallbackFontAssetTable = i2262
  i2246.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2247[38], i2246.m_CreationSettings)
  var i2265 = i2247[39]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('TMPro.TMP_FontWeightPair', i2265[i + 0]) );
  }
  i2246.m_FontWeightTable = i2264
  var i2267 = i2247[40]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('TMPro.TMP_FontWeightPair', i2267[i + 0]) );
  }
  i2246.fontWeights = i2266
  return i2246
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2269 = data
  i2268.m_FaceIndex = i2269[0]
  i2268.m_FamilyName = i2269[1]
  i2268.m_StyleName = i2269[2]
  i2268.m_PointSize = i2269[3]
  i2268.m_Scale = i2269[4]
  i2268.m_LineHeight = i2269[5]
  i2268.m_AscentLine = i2269[6]
  i2268.m_CapLine = i2269[7]
  i2268.m_MeanLine = i2269[8]
  i2268.m_Baseline = i2269[9]
  i2268.m_DescentLine = i2269[10]
  i2268.m_SuperscriptOffset = i2269[11]
  i2268.m_SuperscriptSize = i2269[12]
  i2268.m_SubscriptOffset = i2269[13]
  i2268.m_SubscriptSize = i2269[14]
  i2268.m_UnderlineOffset = i2269[15]
  i2268.m_UnderlineThickness = i2269[16]
  i2268.m_StrikethroughOffset = i2269[17]
  i2268.m_StrikethroughThickness = i2269[18]
  i2268.m_TabWidth = i2269[19]
  return i2268
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2273 = data
  i2272.m_Index = i2273[0]
  i2272.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2273[1], i2272.m_Metrics)
  i2272.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2273[2], i2272.m_GlyphRect)
  i2272.m_Scale = i2273[3]
  i2272.m_AtlasIndex = i2273[4]
  return i2272
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2275 = data
  i2274.m_Width = i2275[0]
  i2274.m_Height = i2275[1]
  i2274.m_HorizontalBearingX = i2275[2]
  i2274.m_HorizontalBearingY = i2275[3]
  i2274.m_HorizontalAdvance = i2275[4]
  return i2274
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2277 = data
  i2276.m_X = i2277[0]
  i2276.m_Y = i2277[1]
  i2276.m_Width = i2277[2]
  i2276.m_Height = i2277[3]
  return i2276
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2280 = root || request.c( 'TMPro.TMP_Character' )
  var i2281 = data
  i2280.m_ElementType = i2281[0]
  i2280.m_Unicode = i2281[1]
  i2280.m_GlyphIndex = i2281[2]
  i2280.m_Scale = i2281[3]
  return i2280
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2286 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2287 = data
  i2286.Name = i2287[0]
  i2286.PointSize = i2287[1]
  i2286.Scale = i2287[2]
  i2286.CharacterCount = i2287[3]
  i2286.LineHeight = i2287[4]
  i2286.Baseline = i2287[5]
  i2286.Ascender = i2287[6]
  i2286.CapHeight = i2287[7]
  i2286.Descender = i2287[8]
  i2286.CenterLine = i2287[9]
  i2286.SuperscriptOffset = i2287[10]
  i2286.SubscriptOffset = i2287[11]
  i2286.SubSize = i2287[12]
  i2286.Underline = i2287[13]
  i2286.UnderlineThickness = i2287[14]
  i2286.strikethrough = i2287[15]
  i2286.strikethroughThickness = i2287[16]
  i2286.TabWidth = i2287[17]
  i2286.Padding = i2287[18]
  i2286.AtlasWidth = i2287[19]
  i2286.AtlasHeight = i2287[20]
  return i2286
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2290 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2291 = data
  i2290.id = i2291[0]
  i2290.x = i2291[1]
  i2290.y = i2291[2]
  i2290.width = i2291[3]
  i2290.height = i2291[4]
  i2290.xOffset = i2291[5]
  i2290.yOffset = i2291[6]
  i2290.xAdvance = i2291[7]
  i2290.scale = i2291[8]
  return i2290
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2292 = root || request.c( 'TMPro.KerningTable' )
  var i2293 = data
  var i2295 = i2293[0]
  var i2294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.add(request.d('TMPro.KerningPair', i2295[i + 0]));
  }
  i2292.kerningPairs = i2294
  return i2292
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2298 = root || request.c( 'TMPro.KerningPair' )
  var i2299 = data
  i2298.xOffset = i2299[0]
  i2298.m_FirstGlyph = i2299[1]
  i2298.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2299[2], i2298.m_FirstGlyphAdjustments)
  i2298.m_SecondGlyph = i2299[3]
  i2298.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2299[4], i2298.m_SecondGlyphAdjustments)
  i2298.m_IgnoreSpacingAdjustments = !!i2299[5]
  return i2298
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2300 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2301 = data
  var i2303 = i2301[0]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2303[i + 0]));
  }
  i2300.m_GlyphPairAdjustmentRecords = i2302
  return i2300
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2306 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2307 = data
  i2306.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2307[0], i2306.m_FirstAdjustmentRecord)
  i2306.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2307[1], i2306.m_SecondAdjustmentRecord)
  i2306.m_FeatureLookupFlags = i2307[2]
  return i2306
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2310 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2311 = data
  i2310.sourceFontFileName = i2311[0]
  i2310.sourceFontFileGUID = i2311[1]
  i2310.pointSizeSamplingMode = i2311[2]
  i2310.pointSize = i2311[3]
  i2310.padding = i2311[4]
  i2310.packingMode = i2311[5]
  i2310.atlasWidth = i2311[6]
  i2310.atlasHeight = i2311[7]
  i2310.characterSetSelectionMode = i2311[8]
  i2310.characterSequence = i2311[9]
  i2310.referencedFontAssetGUID = i2311[10]
  i2310.referencedTextAssetGUID = i2311[11]
  i2310.fontStyle = i2311[12]
  i2310.fontStyleModifier = i2311[13]
  i2310.renderMode = i2311[14]
  i2310.includeFontFeatures = !!i2311[15]
  return i2310
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2314 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'regularTypeface')
  request.r(i2315[2], i2315[3], 0, i2314, 'italicTypeface')
  return i2314
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2316 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2317 = data
  i2316.useSafeMode = !!i2317[0]
  i2316.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2317[1], i2316.safeModeOptions)
  i2316.timeScale = i2317[2]
  i2316.useSmoothDeltaTime = !!i2317[3]
  i2316.maxSmoothUnscaledTime = i2317[4]
  i2316.rewindCallbackMode = i2317[5]
  i2316.showUnityEditorReport = !!i2317[6]
  i2316.logBehaviour = i2317[7]
  i2316.drawGizmos = !!i2317[8]
  i2316.defaultRecyclable = !!i2317[9]
  i2316.defaultAutoPlay = i2317[10]
  i2316.defaultUpdateType = i2317[11]
  i2316.defaultTimeScaleIndependent = !!i2317[12]
  i2316.defaultEaseType = i2317[13]
  i2316.defaultEaseOvershootOrAmplitude = i2317[14]
  i2316.defaultEasePeriod = i2317[15]
  i2316.defaultAutoKill = !!i2317[16]
  i2316.defaultLoopType = i2317[17]
  i2316.debugMode = !!i2317[18]
  i2316.debugStoreTargetId = !!i2317[19]
  i2316.showPreviewPanel = !!i2317[20]
  i2316.storeSettingsLocation = i2317[21]
  i2316.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2317[22], i2316.modules)
  i2316.createASMDEF = !!i2317[23]
  i2316.showPlayingTweens = !!i2317[24]
  i2316.showPausedTweens = !!i2317[25]
  return i2316
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2318 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2319 = data
  i2318.logBehaviour = i2319[0]
  i2318.nestedTweenFailureBehaviour = i2319[1]
  return i2318
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2320 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2321 = data
  i2320.showPanel = !!i2321[0]
  i2320.audioEnabled = !!i2321[1]
  i2320.physicsEnabled = !!i2321[2]
  i2320.physics2DEnabled = !!i2321[3]
  i2320.spriteEnabled = !!i2321[4]
  i2320.uiEnabled = !!i2321[5]
  i2320.textMeshProEnabled = !!i2321[6]
  i2320.tk2DEnabled = !!i2321[7]
  i2320.deAudioEnabled = !!i2321[8]
  i2320.deUnityExtendedEnabled = !!i2321[9]
  i2320.epoOutlineEnabled = !!i2321[10]
  return i2320
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2322 = root || request.c( 'TMPro.TMP_Settings' )
  var i2323 = data
  i2322.m_enableWordWrapping = !!i2323[0]
  i2322.m_enableKerning = !!i2323[1]
  i2322.m_enableExtraPadding = !!i2323[2]
  i2322.m_enableTintAllSprites = !!i2323[3]
  i2322.m_enableParseEscapeCharacters = !!i2323[4]
  i2322.m_EnableRaycastTarget = !!i2323[5]
  i2322.m_GetFontFeaturesAtRuntime = !!i2323[6]
  i2322.m_missingGlyphCharacter = i2323[7]
  i2322.m_warningsDisabled = !!i2323[8]
  request.r(i2323[9], i2323[10], 0, i2322, 'm_defaultFontAsset')
  i2322.m_defaultFontAssetPath = i2323[11]
  i2322.m_defaultFontSize = i2323[12]
  i2322.m_defaultAutoSizeMinRatio = i2323[13]
  i2322.m_defaultAutoSizeMaxRatio = i2323[14]
  i2322.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2323[15], i2323[16] )
  i2322.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2323[17], i2323[18] )
  i2322.m_autoSizeTextContainer = !!i2323[19]
  i2322.m_IsTextObjectScaleStatic = !!i2323[20]
  var i2325 = i2323[21]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2325.length; i += 2) {
  request.r(i2325[i + 0], i2325[i + 1], 1, i2324, '')
  }
  i2322.m_fallbackFontAssets = i2324
  i2322.m_matchMaterialPreset = !!i2323[22]
  request.r(i2323[23], i2323[24], 0, i2322, 'm_defaultSpriteAsset')
  i2322.m_defaultSpriteAssetPath = i2323[25]
  i2322.m_enableEmojiSupport = !!i2323[26]
  i2322.m_MissingCharacterSpriteUnicode = i2323[27]
  i2322.m_defaultColorGradientPresetsPath = i2323[28]
  request.r(i2323[29], i2323[30], 0, i2322, 'm_defaultStyleSheet')
  i2322.m_StyleSheetsResourcePath = i2323[31]
  request.r(i2323[32], i2323[33], 0, i2322, 'm_leadingCharacters')
  request.r(i2323[34], i2323[35], 0, i2322, 'm_followingCharacters')
  i2322.m_UseModernHangulLineBreakingRules = !!i2323[36]
  return i2322
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2326 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2327 = data
  i2326.m_GlyphIndex = i2327[0]
  i2326.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2327[1], i2326.m_GlyphValueRecord)
  return i2326
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2328 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2329 = data
  i2328.m_XPlacement = i2329[0]
  i2328.m_YPlacement = i2329[1]
  i2328.m_XAdvance = i2329[2]
  i2328.m_YAdvance = i2329[3]
  return i2328
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2330 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2331 = data
  i2330.hashCode = i2331[0]
  request.r(i2331[1], i2331[2], 0, i2330, 'material')
  i2330.materialHashCode = i2331[3]
  request.r(i2331[4], i2331[5], 0, i2330, 'spriteSheet')
  var i2333 = i2331[6]
  var i2332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.add(request.d('TMPro.TMP_Sprite', i2333[i + 0]));
  }
  i2330.spriteInfoList = i2332
  var i2335 = i2331[7]
  var i2334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2335.length; i += 2) {
  request.r(i2335[i + 0], i2335[i + 1], 1, i2334, '')
  }
  i2330.fallbackSpriteAssets = i2334
  i2330.m_Version = i2331[8]
  i2330.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2331[9], i2330.m_FaceInfo)
  var i2337 = i2331[10]
  var i2336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.add(request.d('TMPro.TMP_SpriteCharacter', i2337[i + 0]));
  }
  i2330.m_SpriteCharacterTable = i2336
  var i2339 = i2331[11]
  var i2338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.add(request.d('TMPro.TMP_SpriteGlyph', i2339[i + 0]));
  }
  i2330.m_SpriteGlyphTable = i2338
  return i2330
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2342 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2343 = data
  i2342.name = i2343[0]
  i2342.hashCode = i2343[1]
  i2342.unicode = i2343[2]
  i2342.pivot = new pc.Vec2( i2343[3], i2343[4] )
  request.r(i2343[5], i2343[6], 0, i2342, 'sprite')
  i2342.id = i2343[7]
  i2342.x = i2343[8]
  i2342.y = i2343[9]
  i2342.width = i2343[10]
  i2342.height = i2343[11]
  i2342.xOffset = i2343[12]
  i2342.yOffset = i2343[13]
  i2342.xAdvance = i2343[14]
  i2342.scale = i2343[15]
  return i2342
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2348 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2349 = data
  i2348.m_Name = i2349[0]
  i2348.m_HashCode = i2349[1]
  i2348.m_ElementType = i2349[2]
  i2348.m_Unicode = i2349[3]
  i2348.m_GlyphIndex = i2349[4]
  i2348.m_Scale = i2349[5]
  return i2348
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2352 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'sprite')
  i2352.m_Index = i2353[2]
  i2352.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2353[3], i2352.m_Metrics)
  i2352.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2353[4], i2352.m_GlyphRect)
  i2352.m_Scale = i2353[5]
  i2352.m_AtlasIndex = i2353[6]
  return i2352
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2354 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2355 = data
  var i2357 = i2355[0]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.add(request.d('TMPro.TMP_Style', i2357[i + 0]));
  }
  i2354.m_StyleList = i2356
  return i2354
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2360 = root || request.c( 'TMPro.TMP_Style' )
  var i2361 = data
  i2360.m_Name = i2361[0]
  i2360.m_HashCode = i2361[1]
  i2360.m_OpeningDefinition = i2361[2]
  i2360.m_ClosingDefinition = i2361[3]
  i2360.m_OpeningTagArray = i2361[4]
  i2360.m_ClosingTagArray = i2361[5]
  i2360.m_OpeningTagUnicodeArray = i2361[6]
  i2360.m_ClosingTagUnicodeArray = i2361[7]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2363 = data
  var i2365 = i2363[0]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2365[i + 0]) );
  }
  i2362.files = i2364
  i2362.componentToPrefabIds = i2363[1]
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2369 = data
  i2368.path = i2369[0]
  request.r(i2369[1], i2369[2], 0, i2368, 'unityObject')
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2371 = data
  var i2373 = i2371[0]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2373[i + 0]) );
  }
  i2370.scriptsExecutionOrder = i2372
  var i2375 = i2371[1]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2375[i + 0]) );
  }
  i2370.sortingLayers = i2374
  var i2377 = i2371[2]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2377[i + 0]) );
  }
  i2370.cullingLayers = i2376
  i2370.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2371[3], i2370.timeSettings)
  i2370.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2371[4], i2370.physicsSettings)
  i2370.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2371[5], i2370.physics2DSettings)
  i2370.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2371[6], i2370.qualitySettings)
  i2370.enableRealtimeShadows = !!i2371[7]
  i2370.enableAutoInstancing = !!i2371[8]
  i2370.enableDynamicBatching = !!i2371[9]
  i2370.lightmapEncodingQuality = i2371[10]
  i2370.desiredColorSpace = i2371[11]
  var i2379 = i2371[12]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( i2379[i + 0] );
  }
  i2370.allTags = i2378
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2383 = data
  i2382.name = i2383[0]
  i2382.value = i2383[1]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2387 = data
  i2386.id = i2387[0]
  i2386.name = i2387[1]
  i2386.value = i2387[2]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2391 = data
  i2390.id = i2391[0]
  i2390.name = i2391[1]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2393 = data
  i2392.fixedDeltaTime = i2393[0]
  i2392.maximumDeltaTime = i2393[1]
  i2392.timeScale = i2393[2]
  i2392.maximumParticleTimestep = i2393[3]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2395 = data
  i2394.gravity = new pc.Vec3( i2395[0], i2395[1], i2395[2] )
  i2394.defaultSolverIterations = i2395[3]
  i2394.bounceThreshold = i2395[4]
  i2394.autoSyncTransforms = !!i2395[5]
  i2394.autoSimulation = !!i2395[6]
  var i2397 = i2395[7]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2397[i + 0]) );
  }
  i2394.collisionMatrix = i2396
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2401 = data
  i2400.enabled = !!i2401[0]
  i2400.layerId = i2401[1]
  i2400.otherLayerId = i2401[2]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'material')
  i2402.gravity = new pc.Vec2( i2403[2], i2403[3] )
  i2402.positionIterations = i2403[4]
  i2402.velocityIterations = i2403[5]
  i2402.velocityThreshold = i2403[6]
  i2402.maxLinearCorrection = i2403[7]
  i2402.maxAngularCorrection = i2403[8]
  i2402.maxTranslationSpeed = i2403[9]
  i2402.maxRotationSpeed = i2403[10]
  i2402.timeToSleep = i2403[11]
  i2402.linearSleepTolerance = i2403[12]
  i2402.angularSleepTolerance = i2403[13]
  i2402.defaultContactOffset = i2403[14]
  i2402.autoSimulation = !!i2403[15]
  i2402.queriesHitTriggers = !!i2403[16]
  i2402.queriesStartInColliders = !!i2403[17]
  i2402.callbacksOnDisable = !!i2403[18]
  i2402.reuseCollisionCallbacks = !!i2403[19]
  i2402.autoSyncTransforms = !!i2403[20]
  var i2405 = i2403[21]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2405[i + 0]) );
  }
  i2402.collisionMatrix = i2404
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2409 = data
  i2408.enabled = !!i2409[0]
  i2408.layerId = i2409[1]
  i2408.otherLayerId = i2409[2]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2411 = data
  var i2413 = i2411[0]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2413[i + 0]) );
  }
  i2410.qualityLevels = i2412
  var i2415 = i2411[1]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( i2415[i + 0] );
  }
  i2410.names = i2414
  i2410.shadows = i2411[2]
  i2410.anisotropicFiltering = i2411[3]
  i2410.antiAliasing = i2411[4]
  i2410.lodBias = i2411[5]
  i2410.shadowCascades = i2411[6]
  i2410.shadowDistance = i2411[7]
  i2410.shadowmaskMode = i2411[8]
  i2410.shadowProjection = i2411[9]
  i2410.shadowResolution = i2411[10]
  i2410.softParticles = !!i2411[11]
  i2410.softVegetation = !!i2411[12]
  i2410.activeColorSpace = i2411[13]
  i2410.desiredColorSpace = i2411[14]
  i2410.masterTextureLimit = i2411[15]
  i2410.maxQueuedFrames = i2411[16]
  i2410.particleRaycastBudget = i2411[17]
  i2410.pixelLightCount = i2411[18]
  i2410.realtimeReflectionProbes = !!i2411[19]
  i2410.shadowCascade2Split = i2411[20]
  i2410.shadowCascade4Split = new pc.Vec3( i2411[21], i2411[22], i2411[23] )
  i2410.streamingMipmapsActive = !!i2411[24]
  i2410.vSyncCount = i2411[25]
  i2410.asyncUploadBufferSize = i2411[26]
  i2410.asyncUploadTimeSlice = i2411[27]
  i2410.billboardsFaceCameraPosition = !!i2411[28]
  i2410.shadowNearPlaneOffset = i2411[29]
  i2410.streamingMipmapsMemoryBudget = i2411[30]
  i2410.maximumLODLevel = i2411[31]
  i2410.streamingMipmapsAddAllCameras = !!i2411[32]
  i2410.streamingMipmapsMaxLevelReduction = i2411[33]
  i2410.streamingMipmapsRenderersPerFrame = i2411[34]
  i2410.resolutionScalingFixedDPIFactor = i2411[35]
  i2410.streamingMipmapsMaxFileIORequests = i2411[36]
  i2410.currentQualityLevel = i2411[37]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2421 = data
  i2420.weight = i2421[0]
  i2420.vertices = i2421[1]
  i2420.normals = i2421[2]
  i2420.tangents = i2421[3]
  return i2420
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2422 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2423 = data
  i2422.xPlacement = i2423[0]
  i2422.yPlacement = i2423[1]
  i2422.xAdvance = i2423[2]
  i2422.yAdvance = i2423[3]
  return i2422
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[40],"62":[20],"63":[45],"64":[45],"65":[45],"66":[45],"67":[45],"68":[45],"69":[45],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[71],"79":[71],"80":[71],"81":[71],"82":[71],"83":[71],"84":[20],"85":[25],"86":[87],"88":[87],"10":[9],"89":[20],"90":[9],"91":[20],"92":[9],"93":[15,9],"94":[25],"95":[15,9],"96":[9],"97":[25,9],"18":[9,15],"98":[9],"99":[9],"100":[9],"13":[10],"16":[15,9],"101":[9],"12":[10],"102":[9],"103":[9],"104":[9],"105":[9],"106":[9],"107":[9],"108":[9],"109":[9],"110":[9],"111":[15,9],"112":[9],"113":[9],"114":[9],"115":[9],"116":[15,9],"117":[9],"118":[32],"119":[32],"33":[32],"120":[32],"121":[20],"122":[20]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MonoBehaviour","AutoDestroy","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","LookAtCam","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UltimateJoystick","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager2","PlayerController","UnityEngine.GameObject","MachineController","TableRegion","GuestController","UnityEngine.SkinnedMeshRenderer","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.Rigidbody","UnityEngine.SpriteRenderer","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.PostProcessing.PostProcessingBehaviour","CnControls.EmptyGraphic","ToonyColorsPro.Runtime.TCP2_CameraDepth","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.43f1";

Deserializers.productName = "PizzaFever";

Deserializers.lunaInitializationTime = "02/09/2023 18:55:26";

Deserializers.lunaDaysRunning = "0.4";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4081";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PizzaFever";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "21fe08dc-1ae7-4067-b224-af0f93b55282";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

