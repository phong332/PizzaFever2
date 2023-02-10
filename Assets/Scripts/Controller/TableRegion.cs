using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
public class TableRegion : MonoBehaviour
{
    public GuestController guest;
    public int numberPizza = 0;
    public GameObject foodHolder;
    public GameObject mess;
    public GameObject canvas;
    public GameObject guide;
    bool startEat;
    public bool IsFullOfPizza()
    {
        if (foodHolder.transform.childCount > 0 && !startEat)
        {
            guest.Eating();
        }
        return numberPizza == foodHolder.transform.childCount;
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == NameTag.Player)
        {
            guide.SetActive(false);
        }
    }
    public void UpdateMessServe()
    {
        if (numberPizza == foodHolder.transform.childCount)
        {
            Instantiate(GlobalInstance.Instance.gameManager.confenti, foodHolder.transform.position, Quaternion.Euler(-90, 0, 0));
            canvas.SetActive(false);
        }
        mess.GetComponent<TextMeshProUGUI>().text = foodHolder.transform.childCount.ToString() + "/" + numberPizza.ToString();
    }
}
