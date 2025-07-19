import { Card } from "@/components/ui/card";
import Image from "next/image";
import { AdminCourseType } from "@/app/data/admin/admin-get-courses";
import { useConstructUrl } from "@/hooks/use-construct-url";

interface iAppProps {
  data: AdminCourseType;
}

const AdminCourseCard = ({ data }: iAppProps) => {
  const thumbnail = useConstructUrl(data.fileKey);
  return (
    <Card className="group relative">
      {/* absolute dropdown */}
      <div></div>

      <Image
        src={thumbnail}
        alt="thumbnail url"
        width={600}
        height={400}
        className="w-full rounded-t-lg aspect-video h-full object-cover"
      />
    </Card>
  );
};

export default AdminCourseCard;
