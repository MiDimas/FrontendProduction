import {StateSchema} from "@/app/providers/StoreProvider";
import {buildSelector} from "@/shared/lib/store";

export const [useUserUpdated, getUserUpdated] = buildSelector((state: StateSchema) => state?.user._updated)
