import CaseStudiesDetailPage from "@/components/pages/case-studies/CaseStudiesDetailPage"

const CaseStudyDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <CaseStudiesDetailPage params={params} />
  )
}

export default CaseStudyDetailPage