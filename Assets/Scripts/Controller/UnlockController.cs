using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DG.Tweening;
public class UnlockController : MonoBehaviour
{
    public GameObject _thisCanvas;
    public BoxCollider boxCollider;
    public Image fill;
    public GameObject prefabMonsters;
    public GameObject playerTotalMoney;
    public GameObject guide;
    bool flag1 = true, flag2 = true, isTouch = false;
    Coroutine a, b;
    public int amountMoneyToUnlock;
    private void Awake()
    {
        boxCollider = GetComponent<BoxCollider>();
    }
    private void Start()
    {
    }
    public void ActivePrefab()
    {
        // this.PostEvent(EventID.EndDrop);
        boxCollider.enabled = false;
        //  SoundManager.Instance.PlaySoundClick();
        prefabMonsters.SetActive(true);
        prefabMonsters.transform.DOScale(Vector3.one * 1, 1).SetEase(Ease.InOutBack);
        //GlobalInstance.Instance.gameManager.SpawnVfx(objParent.transform.position + Vector3.up * 2);
        guide.SetActive(false);
        GlobalInstance.Instance.gameManager.countToEndcard += 1;
        if (GlobalInstance.Instance.gameManager.countToEndcard == 2)
        {
            //GlobalInstance.Instance.gameManager.canvasGuide.SetActive(false);
            GlobalInstance.Instance.gameManager.canvasJoyStick.SetActive(false);
            GlobalInstance.Instance.gameManager.endGame = true;
            StartCoroutine(GlobalInstance.Instance.gameManager.ShowEndcard());
        }
    }


    bool isTouchPlayer;

    void Scale()
    {
        if (!isTouchPlayer)
        {
            _thisCanvas.transform.DOScale(Vector3.one * 0.06f, 0.25f).SetEase(Ease.InOutBack);
            isTouchPlayer = true;
        }
    }
    void UnScale()
    {
        if (isTouchPlayer)
        {
            _thisCanvas.transform.DOScale(Vector3.one * 0.05f, 0.25f).SetEase(Ease.Linear);
            isTouchPlayer = false;
        }

    }
    private void OnTriggerStay(Collider other)
    {
        if (other.gameObject.CompareTag(NameTag.Player))
        {
            Scale();
            if (flag1)
            {
                flag1 = false;
                isTouch = true;
                flag2 = true;
                if (b != null)
                {
                    StopCoroutine(b);
                }
                a = StartCoroutine(Fill());
            }
        }
    }
    IEnumerator Fill()
    {
        while (true)
        {
            yield return new WaitForSeconds(0.03f);
            if (fill.fillAmount >= 0)
            {
                fill.fillAmount = Mathf.Lerp(fill.fillAmount, fill.fillAmount - 0.05f, 1);
                if (fill.fillAmount == 0)
                {
                    _thisCanvas.transform.DOScale(Vector3.zero, 0.25f).SetEase(Ease.Linear).OnComplete(() => { _thisCanvas.SetActive(false); });
                    gameObject.transform.GetComponent<BoxCollider>().enabled = false;
                    StartCoroutine(Unlock());
                    yield break;
                }

            }
        }

    }
    private void OnTriggerExit(Collider other)
    {
        if (other.gameObject.CompareTag(NameTag.Player))
        {
            UnScale();
            if (flag2 && isTouch)
            {
                isTouch = false;
                flag2 = false;
                flag1 = true;
                if (a != null)
                {
                    StopCoroutine(a);
                }
                b = StartCoroutine(UnFill());

            }
        }
    }
    IEnumerator UnFill()
    {
        while (true)
        {
            yield return new WaitForSeconds(0.03f);
            if (fill.fillAmount <= 1)
            {
                fill.fillAmount = Mathf.Lerp(fill.fillAmount, fill.fillAmount + 0.1f, 1);
                if (fill.fillAmount == 1)
                {
                    yield break;
                }
            }
        }

    }
    IEnumerator Unlock()
    {
        //SoundManager.Instance.PlaySoundUnlock();
        yield return new WaitForSeconds(0.1f);
        ActivePrefab();
        SetTotalMoneyPlayer();

    }
    void SetTotalMoneyPlayer()
    {
        SoundManager.Instance.PlaySoundCrashMoney();
        DOTween.To(() => GlobalInstance.Instance.gameManager.totalMoney
, UpdatePrice, GlobalInstance.Instance.gameManager.totalMoney - amountMoneyToUnlock, 0.5f).SetEase(Ease.Linear).OnComplete(() => { SoundManager.Instance.PlaySoundUnlock(); GlobalInstance.Instance.gameManager.totalMoney -= amountMoneyToUnlock; });
    }
    void UpdatePrice(int price)
    {
        playerTotalMoney.GetComponent<TextMeshProUGUI>().text = $"{price:N0}";
    }
}
