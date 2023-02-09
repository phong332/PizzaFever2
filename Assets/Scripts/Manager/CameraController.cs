using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    public Transform targetObject;
    [HideInInspector] public Vector3 offset;
    [HideInInspector] public bool canFollow = true;
    private void Start()
    {
        GetOffset();
    }
    private void LateUpdate()
    {
        if (!GlobalInstance.Instance.gameManager.endGame)
        {
            {
                if (canFollow)
                {
                    CameraFollow();
                }
            }

        }
    }
    void GetOffset()
    {
        offset = transform.position - targetObject.transform.position;
    }
    void CameraFollow()
    {
        Vector3 newPos = targetObject.transform.position + offset;
        transform.position = newPos;
    }
}
