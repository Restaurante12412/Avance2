

import { createClient } from
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl =
    'https://tiyrhrteiefadzfxqljg.supabase.co'

const supabaseKey =
    'sb_publishable_Bt26nGPmCU2WL7aFYTJHhQ_BHZLAk84'

export const supabase =
    createClient(supabaseUrl, supabaseKey)