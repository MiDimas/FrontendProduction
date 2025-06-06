import { FeatureFlags } from '@/shared/types/featureFlags/featureFlags';

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags){
    if(newFeatureFlags){
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlags(flag: keyof FeatureFlags){
    return featureFlags?.[flag];
}
export function getAllFeatureFlags(){
    return featureFlags;
}