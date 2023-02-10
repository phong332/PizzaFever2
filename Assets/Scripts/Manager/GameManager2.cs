using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager2 : Singleton<GameManager2>
{
    public bool endGame;
    public PlayerController player;
    public int totalMoney;
    public int countToEndcard;
    public GameObject canvasJoyStick;
    public GameObject btnEndcard;
    public GameObject guideMachine;
    public GameObject guide;
    public GameObject arrowGuideHolder;
    public GameObject confenti;
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
        canvasJoyStick.SetActive(false);
        Luna.Unity.LifeCycle.GameEnded();
        yield return new WaitForSeconds(0.5f);
        btnEndcard.SetActive(true);
    }
}
