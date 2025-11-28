import * as React from "react"
import { Check, Paintbrush } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"

const themes = [
    {
        name: "Blue",
        color: "217 91% 60%",
        foreground: "0 0% 100%",
    },
    {
        name: "Green",
        color: "142 71% 45%",
        foreground: "0 0% 100%",
    },
    {
        name: "Orange",
        color: "24 95% 53%",
        foreground: "0 0% 100%",
    },
    {
        name: "Violet",
        color: "262 83% 58%",
        foreground: "0 0% 100%",
    },
    {
        name: "Red",
        color: "346 84% 61%",
        foreground: "0 0% 100%",
    },
]

export function ThemeCustomizer() {
    const [mounted, setMounted] = React.useState(false)
    const [activeTheme, setActiveTheme] = React.useState(themes[0])

    React.useEffect(() => {
        setMounted(true)
        // Check if there is a saved theme in localStorage or similar if we want persistence beyond session
        // For now, we just default to Blue or whatever is set in CSS
    }, [])

    const updateTheme = (theme: typeof themes[0]) => {
        setActiveTheme(theme)
        const root = document.documentElement
        root.style.setProperty("--primary", theme.color)
        root.style.setProperty("--primary-foreground", theme.foreground)
        // We might want to update ring and other related variables too
        root.style.setProperty("--ring", theme.color)
    }

    if (!mounted) {
        return null
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                    <Paintbrush className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Customize theme</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Theme Customizer</h4>
                        <p className="text-sm text-muted-foreground">
                            Customize the look and feel of the application.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 gap-2">
                            {themes.map((theme) => (
                                <Button
                                    key={theme.name}
                                    variant={"outline"}
                                    className={cn(
                                        "justify-start",
                                        activeTheme.name === theme.name && "border-2 border-primary"
                                    )}
                                    onClick={() => updateTheme(theme)}
                                >
                                    <span
                                        className="mr-2 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full"
                                        style={{ backgroundColor: `hsl(${theme.color})` }}
                                    >
                                        {activeTheme.name === theme.name && (
                                            <Check className="h-3 w-3 text-white" />
                                        )}
                                    </span>
                                    {theme.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
