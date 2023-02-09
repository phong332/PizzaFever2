using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class PlayerController : MonoBehaviour
{
    public Animator animator;
    bool flagAnim1 = true, flagAnim2 = true;
    public bool startTouch, playSoundRun = true, canMove = false;
    [SerializeField] float speed, rotationSpeed;
    public Rigidbody rigid;
    bool firstStop;
    Vector3 vectorMovingDirection = Vector3.zero;
    float velAxisX, velAxisY;
    bool isCarryPizza;
    public GameObject foodHolder;
    public GameObject foodHolderOnTable;
    TableRegion _table;
    public void Init()
    {
    }
    private void Update()
    {
        if (!GlobalInstance.Instance.gameManager.endGame)
        {
            Move();
        }
        else
        {
            //rigid.isKinematic = true;
            if (!firstStop)
            {
                firstStop = true;
                rigid.velocity = Vector3.zero;
                animator.SetBool("Walk", false);
            }
            if (Input.GetMouseButtonDown(0))
            {
                // GlobalInstance.Instance.gameManager.InstallFullGame();
            }
        }
    }
    private void FixedUpdate()
    {
        if (canMove)
        {
            rigid.velocity = vectorMovingDirection * speed * Time.fixedDeltaTime;
        }
        else
        {
            rigid.velocity = Vector3.zero;

        }
    }
    public void Move()
    {
        velAxisX = UltimateJoystick.GetHorizontalAxis(DefineHelper.JoyStick);
        velAxisY = UltimateJoystick.GetVerticalAxis(DefineHelper.JoyStick);
        if (Input.GetMouseButtonDown(0))
        {
            GlobalInstance.Instance.gameManager.guide.SetActive(false);
            GlobalInstance.Instance.gameManager.guideMachine.SetActive(true);
            startTouch = true;
        }
        if (Input.GetMouseButton(0) && startTouch)
        {
            if ((velAxisX != 0) || (velAxisY != 0))
            {
                vectorMovingDirection = new Vector3(velAxisX, 0, velAxisY).normalized;

                RotateFacing(vectorMovingDirection);
                canMove = true;
                AnimRun();
                if (playSoundRun)
                {
                    // SoundManager.Instance.PlaySoundRun();
                    ResetSoundRun();
                    playSoundRun = false;
                }
            }
            else
            {
                //  GlobalInstance.Instance.gameManager.audioManager.StopSoundRun();
            }
        }
        if (Input.GetMouseButtonUp(0))
        {
            AnimIdle();

            startTouch = false;
            canMove = false;
        }
    }
    void ResetSoundRun()
    {
        StartCoroutine(IEResetSoundRun(0.3f));
    }
    IEnumerator IEResetSoundRun(float time)
    {
        yield return new WaitForSeconds(time);
        playSoundRun = true;
    }
    void RotateFacing(Vector3 directionFacing)
    {
        if (directionFacing == Vector3.zero)
            return;
        var targetRotation = Quaternion.LookRotation(directionFacing);
        transform.rotation = Quaternion.RotateTowards(transform.rotation, targetRotation, rotationSpeed * Time.fixedDeltaTime);
    }
    void AnimRun()
    {
        if (flagAnim1)
        {
            flagAnim1 = false;
            flagAnim2 = true;
            if (!isCarryPizza)
            {
                animator.SetBool("Walk", true);
                animator.SetTrigger("Carry");
            }
            else
                animator.SetBool("Carry", true);

        }
    }
    void AnimIdle()
    {
        if (flagAnim2)
        {
            flagAnim1 = true;
            flagAnim2 = false;
            if (!isCarryPizza)
                animator.SetBool("Walk", false);
            else
                animator.SetBool("RunCarry", false);

        }
    }
    void GetPizza(GameObject pizza)
    {
        isCarryPizza = true;
        //brick.transform.localScale = Vector3.one * 800;
        //brick.transform.localRotation = Quaternion.Euler(new Vector3(-90, 0, 90));
        pizza.transform.localPosition = Vector3.zero;
        pizza.transform.SetParent(foodHolder.transform);
        if (foodHolder.transform.childCount <= 1)
        {
            pizza.transform.localPosition = Vector3.zero;
            //            pizza.transform.DOJump(foodHolder.transform.localPosition, 20, 1, 0.05f).SetEase(Ease.Linear);

        }
        else
        {
            pizza.transform.localPosition = Vector3.up * 0.2f + foodHolder.transform.GetChild(foodHolder.transform.childCount - 2).localPosition;
            // pizza.transform.DOJump(Vector3.up * 0.05f * (foodHolder.transform.childCount - 2) + foodHolder.transform/*.GetChild(foodHolder.transform.childCount - 2)*/.localPosition, 20, 1, 0.05f).SetEase(Ease.Linear);

        }

    }
    Coroutine a;
    bool canRelease;
    [SerializeField] float timeReleaseBrick;

    void ReleasePizza()
    {
        if (velAxisX != 0 || velAxisY != 0)
        {
            if (a != null)
            {
                StopCoroutine(a);
            }
            canRelease = true;
            return;
        }
        if (canRelease)
        {
            StartCoroutine(IEReleaseBrick());
            canRelease = false;
        }
    }
    IEnumerator IEReleaseBrick()
    {
        if (!_table)
        {
            canRelease = true;
            yield break;
        }
        if (foodHolder.transform.childCount == 0 || _table.IsFullOfPizza())
        {
            canRelease = true;
            isCarryPizza = false;
            yield break;
        }
        var _pizza = (GameObject)foodHolder.transform.GetChild(foodHolder.transform.childCount - 1).gameObject;
        _pizza.transform.SetParent(foodHolderOnTable.transform);
        _pizza.transform.DOJump(Vector3.up * 0.5f * foodHolderOnTable.transform.childCount + foodHolderOnTable.transform.position, 20, 1, 0.5f).SetEase(Ease.Linear);
        yield return new WaitForSeconds(timeReleaseBrick);
        canRelease = true;
    }

    private void OnTriggerExit(Collider other)
    {
        if (other.gameObject.tag == "Table")
        {
            canRelease = true;
        }
    }
    private void OnTriggerStay(Collider other)
    {
        if (other.gameObject.tag == "Table")
        {
            ReleasePizza();
        }
    }
    bool canGetPizza = true;
    IEnumerator GetPizzaAgain()
    {
        yield return new WaitForSeconds(0.02f);
        canGetPizza = true;
    }
    private void OnCollisionStay(Collision collision)
    {
        if (collision.gameObject.tag == "Machine" && canGetPizza)
        {
            var machine = collision.gameObject.GetComponent<MachineController>();
            var pizz = machine.GetPizza();
            if (pizz == null)
            {
                isCarryPizza = false;
                return;
            }
            canGetPizza = false;
            GetPizza(pizz);
            StartCoroutine(GetPizzaAgain());
        }
        if (collision.gameObject.tag == "Table")
        {
            _table = collision.gameObject.GetComponent<TableRegion>();
            foodHolderOnTable = _table.foodHolder;
            ReleasePizza();
        }
    }
    //private void OnTriggerEnter(Collider other)
    //{
    //    if (other.gameObject.CompareTag("Unlock"))
    //    {
    //        SoundManager.Instance.PlaySoundEnterRegion();
    //        //dropMoney.SetTarget(other.gameObject);
    //        //  this.PostEvent(EventID.StartDrop);
    //    }

    //}
    //private void OnTriggerExit(Collider other)
    //{
    //    if (other.gameObject.CompareTag("Unlock"))
    //    {
    //        //  this.PostEvent(EventID.EndDrop);
    //    }
    //}
}


