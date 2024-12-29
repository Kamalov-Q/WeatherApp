import WeatherSkeleton from "@/components/loading";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button"
import { useGeoLocation } from "@/hooks/useGeoLocation"
import { useReverseGeoCodeQuery } from "@/hooks/useWeather";
import { AlertCircle, MapPin, RefreshCcw } from "lucide-react"

const Weather = () => {

    const { error: locationError, isLoading: locationLoading, getLocation, coordinates } = useGeoLocation();

    const locationQuery = useReverseGeoCodeQuery(coordinates);
    console.log(locationQuery, "Location Query");
    
    


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
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Location Error</AlertTitle>
                <AlertDescription className="flex flex-col gap-4">
                    <p>{locationError}</p>
                    <Button onClick={getLocation} variant={"outline"} className="w-fit">
                        <MapPin className="mr-2 h-4 w-4" />
                    </Button>
                </AlertDescription>
            </Alert>
        )
    }

    if (!coordinates) {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Location Required</AlertTitle>
                <AlertDescription className="flex flex-col gap-4">
                    <p>Please enable location access to see your local weather.</p>
                    <Button onClick={getLocation} variant={"outline"} className="w-fit">
                        <MapPin className="mr-2 h-4 w-4" />
                    </Button>
                </AlertDescription>
            </Alert>
        )
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
