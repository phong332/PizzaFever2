using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager1 : Singleton<GameManager1>
{
    public bool endGame;
    public PlayerController player;
    public int totalMoney;
    public int countToEndcard;
    public GameObject canvasJoyStick;
    public GameObject btnEndcard;
    public GameObject guide;
    public GameObject arrowGuideHolder;

    // Start is called before the first frame update
    void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        player.Init();
    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    public IEnumerator ShowEndcard()
    {
        endGame = true;
        Luna.Unity.LifeCycle.GameEnded();
        yield return new WaitForSeconds(1);
        btnEndcard.SetActive(true);
    }
}
