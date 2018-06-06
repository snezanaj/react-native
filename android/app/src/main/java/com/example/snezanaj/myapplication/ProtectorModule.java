package com.example.snezanaj.myapplication;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.entrust.identityGuard.mobile.sdk.Identity;

public class ProtectorModule extends ReactContextBaseJavaModule {


    public ProtectorModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return ProtectorModule.class.getSimpleName();
    }

    @ReactMethod
    public void callProtectorApi() {
        Toast.makeText(getReactApplicationContext(), "test", Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void onGetCodeCallback(Callback onGetCode){
        Toast.makeText(getReactApplicationContext(), Identity.getUnlockChallenge(), Toast.LENGTH_LONG).show();
    }
}
