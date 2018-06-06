package com.example.snezanaj.myapplication;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "MainComponentName";
    }

    @Override
    protected boolean getUseDeveloperSupport() {
        return false;
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(new MainReactPackage(), new ProtectPackage());
    }
}
