import CaseStudiesDetailPage from "@/components/pages/case-studies/CaseStudiesDetailPage"

const CaseStudyDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <CaseStudiesDetailPage params={params} />
  )
}

export default CaseStudyDetailPage