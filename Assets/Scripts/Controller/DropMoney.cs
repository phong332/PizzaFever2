using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class DropMoney : MonoBehaviour
{
    public float time;
    public float speed;
    public GameObject target;
    public List<GameObject> lstMoneys;
    Coroutine a;
    // Start is called before the first frame update
    public void Init()
    {
        lstMoneys = new List<GameObject>();
        target = null;
        for (int i = 0; i < transform.childCount; i++)
        {
            lstMoneys.Add(transform.GetChild(i).gameObject);
        }
        AddListener();
    }

    public void AddListener()
    {
        EventDispatcher.Instance.RegisterListener(EventID.StartDrop, (param) => { DropMoneyToUnlock(); });
        EventDispatcher.Instance.RegisterListener(EventID.EndDrop, (param) => { EndDrop(); });
    }
    private void OnDestroy()
    {
        RemoveListener();
    }
    public void RemoveListener()
    {
        EventDispatcher.Instance.RemoveListener(EventID.StartDrop, (param) => { DropMoneyToUnlock(); });
        EventDispatcher.Instance.RemoveListener(EventID.EndDrop, (param) => { EndDrop(); });

    }
    public void DropMoneyToUnlock()
    {
        a = StartCoroutine(IEDrop());
    }
    IEnumerator IEDrop()
    {
        while (true)
        {
            if (lstMoneys.Count == 0 || target == null)
            {
                yield break;
            }
            yield return new WaitForSeconds(time);
            SoundManager.Instance.PlaySoundCrashMoney();
            var money = lstMoneys[0].gameObject;
            money.transform.SetParent(null);
            lstMoneys.RemoveAt(0);
            money.transform.DOJump(target.transform.position + Vector3.down * 2, 10f, 1, speed, false).SetEase(Ease.Linear).OnComplete(() =>
               {
                   money.transform.SetParent(transform);
                   money.transform.localPosition = new Vector3(0, 1.146492F, 0);
                   lstMoneys.Add(money);
               });
        }
    }
    public void EndDrop()
    {
        if (a != null)
        {
            StopCoroutine(a);
        }
    }
    public void SetTarget(GameObject _target)
    {
        this.target = _target;
    }
}
