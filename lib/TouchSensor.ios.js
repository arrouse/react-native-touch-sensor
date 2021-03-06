/**
 * @flow
 */

import { NativeModules } from 'react-native'

const NativeModule = NativeModules.TouchSensor

export default {

    /**
     * Checks to see if the current setup is supported on the device given current settings.
     */
    isSupported() {
        return NativeModule.isSupported()
    },

    /**
     * Asks the user for their fingerprint and returns the result.
     * @param {* The reason why you are asking for the fingerprint.} reason 
     */
    authenticate(reason: String) {
        reason = reason || ' '
        return NativeModule.authenticate(reason)
    },

    /**
     * Android only methods.
     */
    hasPermissions() {
         return Promise.reject(new Error('This is an Android only method, use isSupported to determine support'))
     },

     hardwareSupported() {
         return Promise.reject(new Error('This is an Android only method, use isSupported to determine support'))
     },

     hasFingerprints() {
         return Promise.reject(new Error('This is an Android only method, use isSupported to determine support'))
     }
}
