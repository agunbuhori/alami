package com.alami; 

import android.provider.Settings;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceModule extends ReactContextBaseJavaModule {

  public String deviceUID;
  DeviceModule(ReactApplicationContext context) {
    super(context);
    deviceUID = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ANDROID_ID);
  }

  @Override
  public String getName() {
    return "DeviceModule";
  }

  @ReactMethod(isBlockingSynchronousMethod = true)
  public String getDeviceUID() {
    return deviceUID;
  }
}
