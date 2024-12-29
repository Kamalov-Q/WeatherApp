import WeatherSkeleton from "@/components/loading";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button"
import { useGeoLocation } from "@/hooks/useGeoLocation"
import { AlertCircle, RefreshCcw } from "lucide-react"

const Weather = () => {

    const { error: locationError, isLoading: locationLoading, getLocation, coordinates } = useGeoLocation();
  
    const handleRefresh = () => {
        getLocation();
        if (coordinates) {
            //reload weather data
        }
    };

    if (locationLoading) {
        return <WeatherSkeleton />
    }

    if (locationError) {
        return <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Location Error</AlertTitle>
            <AlertDescription>
                {locationError}
            </AlertDescription>
        </Alert>
    }



    return (
        <div className="space-y-4">
            {/* Favourite cities */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-tight">My Location</h1>
                <Button variant={"outline"} size={"icon"}
                    onClick={handleRefresh}
                // disabled={}
                >
                    <RefreshCcw className="h-4 w-4" />
                </Button>
            </div>

            {/* Current and Hourly weather */}
        </div>
    )
}

export default Weather
