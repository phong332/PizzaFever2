using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : Singleton<SoundManager>
{
    public AudioClip crashMoney, unlock, region;
    public AudioSource audioSource;

    public void PlaySoundEnterRegion()
    {
        audioSource.PlayOneShot(region);
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
