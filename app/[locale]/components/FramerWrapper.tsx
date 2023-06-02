'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ScriptProps } from 'next/script'

const FramerWrapper = ({ children }: ScriptProps) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default FramerWrapper
