import {CategoryCode} from "@/Core/Enums/CategoryCode.ts";
import {CategoryDescription} from "@/Core/Enums/CategoryDescription.ts";

export interface Category {
    categoryCode: CategoryCode;
    level?:       number;
    description:  CategoryDescription;
    commonName:   null | string;
    groupCode?:   string;
}
