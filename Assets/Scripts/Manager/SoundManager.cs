using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : Singleton<SoundManager>
{
    public AudioClip crashMoney, unlock, region, getPizza;
    public AudioSource audioSource;

    public void PlaySoundEnterRegion()
    {
        audioSource.PlayOneShot(region);
    }
    public void PlaySoundGetPizza()
    {
        audioSource.PlayOneShot(getPizza);
    }
    public void PlaySoundCrashMoney()
    {
        audioSource.PlayOneShot(crashMoney);
    }
    public void PlaySoundUnlock()
    {
        audioSource.PlayOneShot(unlock);

    }

}
