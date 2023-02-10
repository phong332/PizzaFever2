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
    public bool isCarryPizza;
    public GameObject foodHolder;
    public GameObject foodHolderOnTable;
    public GameObject canvasMess;
    TableRegion _table;
    public bool canSetAnim = true;
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
    bool firstTouch2;
    public void Move()
    {
        velAxisX = UltimateJoystick.GetHorizontalAxis(DefineHelper.JoyStick);
        velAxisY = UltimateJoystick.GetVerticalAxis(DefineHelper.JoyStick);
        if (Input.GetMouseButtonDown(0))
        {
            if (!firstTouch2)
            {
                firstTouch2 = true;
                GlobalInstance.Instance.gameManager.guide.SetActive(false);
                GlobalInstance.Instance.gameManager.guideMachine.SetActive(true);
            }

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
                if (canSetAnim)
                {
                    canSetAnim = false;
                    animator.SetTrigger("Idle");
                }

            }
            else
            {
                //  animator.SetBool("Walk", true);
                animator.SetTrigger("RunCarry");

            }

        }
    }
    void AnimIdle()
    {
        if (flagAnim2)
        {
            flagAnim1 = true;
            flagAnim2 = false;
            if (!isCarryPizza)
            {
                {
                    animator.SetBool("Walk", false);
                }
            }
            else
            {
                animator.SetTrigger("Carry");
                //  animator.SetTrigger("Idle");
            }

        }
    }
    void GetPizza(GameObject pizza)
    {
        canSetAnim = true;
        SoundManager.Instance.PlaySoundGetPizza();
        isCarryPizza = true;
        pizza.transform.localPosition = Vector3.zero;
        pizza.transform.SetParent(foodHolder.transform);
        if (foodHolder.transform.childCount <= 1)
        {
            pizza.transform.localPosition = Vector3.zero;
        }
        else
        {
            pizza.transform.localPosition = Vector3.up * 0.2f + foodHolder.transform.GetChild(foodHolder.transform.childCount - 2).localPosition;

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
        if (!isCarryPizza && GlobalInstance.Instance.gameManager.countToEndcard >= 6)
        {
            StartCoroutine(GlobalInstance.Instance.gameManager.ShowEndcard());
            return;
        }
        if (canRelease)
        {

            StartCoroutine(IEReleasePizza());
            canRelease = false;
        }
    }
    IEnumerator IEReleasePizza()
    {
        if (!_table)
        {
            canRelease = true;
            yield break;
        }
        if (foodHolder.transform.childCount == 0)
        {
            animator.SetTrigger("Idle");
            isCarryPizza = false;
            yield break;
        }

        if (_table.IsFullOfPizza())
        {
            canRelease = true;
            yield break;
        }
        SoundManager.Instance.PlaySoundEnterRegion();
        canvasMess.SetActive(false);
        var _pizza = (GameObject)foodHolder.transform.GetChild(foodHolder.transform.childCount - 1).gameObject;
        _pizza.transform.SetParent(foodHolderOnTable.transform);
        _table.UpdateMessServe();
        _pizza.transform.DOJump(Vector3.up * 0.5f * foodHolderOnTable.transform.childCount + foodHolderOnTable.transform.position, 10, 1, 0.5f).SetEase(Ease.Linear);
        GlobalInstance.Instance.gameManager.countToEndcard += 1;

        yield return new WaitForSeconds(timeReleaseBrick);
        canRelease = true;
    }
    private void OnCollisionExit(Collision collision)
    {
        if (collision.gameObject.tag == "Machine")
        {
            canvasMess.SetActive(false);
        }


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
            _table = other.gameObject.GetComponent<TableRegion>();
            foodHolderOnTable = _table.foodHolder;
            ReleasePizza();
        }
        //if (other.gameObject.tag == "Table")
        //{
        //    ReleasePizza();
        //}
    }
    bool canGetPizza = true;
    IEnumerator GetPizzaAgain()
    {
        yield return new WaitForSeconds(0.02f);
        canGetPizza = true;
    }
    bool firstTouch;
    private void OnCollisionStay(Collision collision)
    {
        if (collision.gameObject.tag == "Machine" && canGetPizza)
        {
            if (!firstTouch)
            {
                firstTouch = true;
                GlobalInstance.Instance.gameManager.guideMachine.SetActive(false);
                GlobalInstance.Instance.gameManager.arrowGuideHolder.SetActive(true);
            }
            if (foodHolder.transform.childCount == 0)
            {
                if (velAxisX != 0 || velAxisY != 0)
                    animator.SetTrigger("RunCarry");
                else
                    animator.SetTrigger("Carry");

            }

            if (foodHolder.transform.childCount == 10)
            {
                canvasMess.SetActive(true);
                canGetPizza = true;
                return;
            }
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


