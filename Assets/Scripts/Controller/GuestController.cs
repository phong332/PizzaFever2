using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GuestController : MonoBehaviour
{
    Animator animator;
    private void Awake()
    {
        animator = GetComponent<Animator>();
    }

    public void SetAnim(bool state)
    {
        animator.SetBool("Eat", state);
    }
}
