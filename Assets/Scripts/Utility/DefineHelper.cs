using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public enum Difficult
{
    EASY,
    NORMAL,
    HARD
}
public class DefineHelper
{
    public const string Moving = "Moving";
    public const string Attack = "Attack";
    public const string Dead = "Dead";
    public const string JoyStick = "JoyStick";
}
public class NameTag
{
    public const string FakeGround = "FakeGround";
    public const string Player = "Player";
}
public enum EventID
{
    StartAttack = 0,
    CheckMerge = 1,
    EndGame = 2,
    StartDrop = 3,
    EndDrop = 4,
}
