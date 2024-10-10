import { IEventDetails } from "@/interfaces";
import { Button, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ListingCard = ({ id, image, name, description }: IEventDetails) => {
  const router = useRouter();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Image
          src={image}
          alt={`event number ${id}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <h1 className="font-bold text-2xl my-2">{name}</h1>
        <h2>{description}</h2>
        <Button
          variant="contained"
          href={`/home/event/${id}`}
          sx={{
            mt: 3,
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
