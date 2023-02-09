using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TableRegion : MonoBehaviour
{
    public GuestController guest;
    public int numberPizza = 0;
    public GameObject foodHolder;
    private void Start()
    {
    }
    public bool IsFullOfPizza()
    {
        return numberPizza == foodHolder.transform.childCount;
    }

    void GetFood(GameObject pizza)
    {
        pizza.transform.SetParent(foodHolder.transform);
        pizza.transform.localPosition = Vector3.up * 0.05f + foodHolder.transform.GetChild(foodHolder.transform.childCount - 2).localPosition;
    }

}
