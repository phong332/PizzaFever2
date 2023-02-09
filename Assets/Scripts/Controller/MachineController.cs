using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MachineController : MonoBehaviour
{
    public List<GameObject> lstPizzaHolder;
    public GameObject GetPizza()
    {
        if (lstPizzaHolder.Count == 0)
            return null;
        var pizza = lstPizzaHolder[lstPizzaHolder.Count - 1];
        lstPizzaHolder.RemoveAt(lstPizzaHolder.Count - 1);
        return pizza;
    }
}
