import { Tenant } from "@/types/Tenant";

export const createApi = () => ({

    getTenant: (tenantSlug: string): boolean | Tenant => {
        switch (tenantSlug) {
                case 'b7burger':
                    return {
                        slug: 'b7burger',
                        name: 'B7Burger',
                        mainColor: '#FF0000',
                        secondColor: '#00FF00'
                    }
                case 'b7pizza':
                    return {
                        slug: 'b7pizza',
                        name: 'B7Pizza',
                        mainColor: '#0000FF',
                        secondColor: '#00FF00'
                    }
                default: return false;
        }
    }
    
});