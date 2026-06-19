import CaseStudiesDetailPage from "@/components/pages/CaseStudiesDetailPage"

const CaseStudyDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <CaseStudiesDetailPage params={params} />
  )
}

export default CaseStudyDetailPage